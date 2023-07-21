import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: {
      state: {
        Good: 0,
        Neutral: 0,
        Bad: 0,
      },
    },
  };

  static propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
    // Good: PropTypes.number,
    // Neutral: PropTypes.number,
    // Bad: PropTypes.number,
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
  onLeaveFeedback (){
     const {good, neutral, bad} = this.state;
      }
  render() {
    const { options, onLeaveFeedback } = this.props;    
    return (
      <div>
        {/* {console.log(options)} */}
        {Object.keys(options).map(element => (
          <button key={element} onClick={onLeaveFeedback}>
            {element}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;