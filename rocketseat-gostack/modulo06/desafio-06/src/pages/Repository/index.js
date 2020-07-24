import React, { Component } from 'react';

import { Container } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Repository extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { route } = this.props;
    // eslint-disable-next-line react/prop-types
    const { repository } = route.params;
    // eslint-disable-next-line react/prop-types
    return <Container source={{ uri: repository.html_url }} />;
  }
}
