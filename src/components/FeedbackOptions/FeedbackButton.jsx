import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptionsStyle';

class FeedbackButton extends Component {
  static propTypes = {
    List: PropTypes.object,
    onClick: PropTypes.func,
  };
  render() {
    const { List, onClick } = this.props;
    return (
      <>
        {Object.keys(List).map((element) => (
          <Button key={element} onClick={() => onClick(element)}>
            {element}
          </Button>
        ))}
      </>
    );
  }
}

export default FeedbackButton;
