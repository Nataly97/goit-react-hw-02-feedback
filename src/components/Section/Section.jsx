import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static defaultProps = {
    title: "Please leave feedback",
  };

  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
