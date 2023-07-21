import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      state: {
        good: this.props.Good,
        neutral: this.props.Neutral,
        bad: this.props.Bad,
      },
    };
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Statistics</h1>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </div>
    );
  }
}

export default Statistics;
