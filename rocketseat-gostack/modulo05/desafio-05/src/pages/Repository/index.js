import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Radio, RadioGroup } from 'react-radios';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Loading,
  Owner,
  IssueList,
  RadioCentral,
  Buttons,
  ButtonPrev,
  ButtonNext,
} from './styles';
import Container from '../components/container';

export default class Repository extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    repository: {},
    issues: [],
    loading: true,
    state: 'all',
    firstPage: true,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { state, page } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const { state, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state,
        per_page: 5,
        page,
      },
    });

    this.setState({ issues: response.data });
  };

  handleChange = async state => {
    this.setState({ state });
    this.loadIssues();
  };

  handleNextPage = async () => {
    const { page } = this.state;
    const nextPage = page + 1;
    await this.setState({ page: nextPage, firstPage: false });
    this.loadIssues();
  };

  handlePrevPage = async () => {
    const { page } = this.state;
    const prevPage = page - 1;

    await this.setState({
      page: prevPage,
      firstPage: prevPage === 1,
    });
    this.loadIssues();
  };

  render() {
    const { repository, issues, loading, state, firstPage } = this.state;
    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <RadioCentral>
          <RadioGroup value={state} onChange={this.handleChange}>
            <Radio value="all" /> All
            <Radio value="open" style={{ marginLeft: '20px' }} /> Open
            <Radio value="closed" style={{ marginLeft: '20px' }} /> Closed
          </RadioGroup>
        </RadioCentral>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
          <Buttons>
            <ButtonPrev firstPage={firstPage} onClick={this.handlePrevPage}>
              Prev
            </ButtonPrev>
            <ButtonNext onClick={this.handleNextPage}>Next </ButtonNext>
          </Buttons>
        </IssueList>
      </Container>
    );
  }
}
