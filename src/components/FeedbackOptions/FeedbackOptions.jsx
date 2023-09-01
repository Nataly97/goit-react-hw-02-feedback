import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import { Button } from './FeedbackOptionsStyle';

class FeedbackOptions extends Component {
  static defaultProps = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    onLeaveFeedback: () => {},
    countTotal: 0,
    countPositive: 0,
  };

  static propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
    countTotal: PropTypes.number,
    countPositive: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      good: this.props.options.Good,
      neutral: this.props.options.Neutral,
      bad: this.props.options.Bad,
      total: this.props.countTotal,
      positivePercentage: this.props.countPositive,
    };
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage.bind(this);
  }

  onLeaveFeedback(element) {
    this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    if (element === 'Good') {
      this.setState({ good: good + 1 }, () => {
        this.countPositiveFeedbackPercentage();
      });
    } else if (element === 'Neutral') {
      this.setState({ neutral: neutral + 1 }, () => {
        this.countPositiveFeedbackPercentage();
      });
    } else {
      this.setState({ bad: bad + 1 }, () => {
        this.countPositiveFeedbackPercentage();
      });
    }
  }

  countTotalFeedback() {
    const { total } = this.state;
    this.setState({ total: total + 1 });
  }

  countPositiveFeedbackPercentage() {
    const { good, total } = this.state;
    const positivePercentage =
      total === 0 ? 0 : Math.round((good * 100) / total);
    this.setState({ positivePercentage });
  }

  render() {
    const { options } = this.props;
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div>
        {Object.keys(options).map(element => (
          <Button key={element} onClick={() => this.onLeaveFeedback(element)}>
            {element}
          </Button>
        ))}
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
