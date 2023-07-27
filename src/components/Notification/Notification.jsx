import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <h1>Statistics</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default Notification;
