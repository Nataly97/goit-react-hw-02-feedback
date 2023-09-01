import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './NotificationStyle';

class Notification extends Component {
  static defaultProps = {
    message: '',
  };

  static propTypes = {
    message: PropTypes.string,
  };
  render() {
    const { message } = this.props;
    return (
      <div>
        <Title>Statistics</Title>
        <p>{message}</p>
      </div>
    );
  }
}

export default Notification;
