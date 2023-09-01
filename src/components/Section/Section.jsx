import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './SectionStyle';

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
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    );
  }
}

export default Section;
