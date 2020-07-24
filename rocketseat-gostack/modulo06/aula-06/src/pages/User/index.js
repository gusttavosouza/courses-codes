import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Author,
  Info,
  Title,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class User extends Component {
  static protTypes = {
    route: PropTypes.shape({
      params: PropTypes.shape({
        user: PropTypes.shape({
          login: PropTypes.string,
          avatar: PropTypes.string,
          name: PropTypes.string,
          bio: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  // eslint-disable-next-line react/state-in-constructor
  state = {
    stars: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    // eslint-disable-next-line react/prop-types
    const { route } = this.props;
    // eslint-disable-next-line react/prop-types
    const { user } = route.params;

    // eslint-disable-next-line react/prop-types
    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }


  render() {
    // eslint-disable-next-line react/prop-types
    const { route } = this.props;
    // eslint-disable-next-line react/prop-types
    const { user } = route.params;
    const { stars } = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />

      </Container>
    );
  }
}
