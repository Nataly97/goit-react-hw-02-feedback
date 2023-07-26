import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';

class FeedbackOptions extends Component {
  static defaultProps = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    onLeaveFeedback: () => {},
  };

  static propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      good: this.props.options.Good,
      neutral: this.props.options.Neutral,
      bad: this.props.options.Bad,
    };
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }
  onLeaveFeedback(element) {
    const { good, neutral, bad } = this.state;
    if (element === 'Good') {
      this.setState({ good: good + 1 });
    } else if (element === 'Neutral') {
      this.setState({ neutral: neutral + 1 });
    } else {
      this.setState({ bad: bad + 1 });
    }
  }
  render() {
    const { options } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <div>
        {Object.keys(options).map(element => (
          <button key={element} onClick={() => this.onLeaveFeedback(element)}>
            {element}
          </button>
        ))}
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default FeedbackOptions;
