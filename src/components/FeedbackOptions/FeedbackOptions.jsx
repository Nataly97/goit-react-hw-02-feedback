import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import FeedbackButton from './FeedbackButton';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback(element) {
    this.setState({ [element]: this.state[element] + 1 });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good * 100) / total);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        {/* {Object.keys(this.state).map(element => (
          <Button key={element} onClick={() => this.onLeaveFeedback(element)}>
            {element}
          </Button>
        ))} */}
        <FeedbackButton List={this.state} onClick={this.onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

export default FeedbackOptions;
