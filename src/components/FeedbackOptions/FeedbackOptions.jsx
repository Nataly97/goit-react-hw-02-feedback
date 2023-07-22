
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    onLeaveFeedback: () =>{}
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
    // console.log(this.state)
    if (element === 'Good') {
      this.setState({ good: good + 1 });
    } else if (element === 'Neutral') {
      this.setState({ neutral: neutral + 1 });
    } else {
      this.setState({ bad: bad + 1 });
    }
  }
  render() {
    const { options, onLeaveFeedback } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <div>
        {Object.keys(options).map(element => (
          <button key={element} onClick={() => this.onLeaveFeedback(element)}>
            {element} 
          </button>
        ))}
        <h1>{good}</h1>
        <h1>{neutral}</h1>
        <h1>{bad}</h1>
      </div>
    );
  }
}

export default FeedbackOptions;