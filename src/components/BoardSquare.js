import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

drop(props, monitor) {
  moveKnight(props.x, props,y);
}

export default class BoardSquare extends Component {
  const squareTarget = {
  }

  render() {
    const { x, y } = this.props;
    const brown = (x + y) % 2 === 1;

    return (
      <Square brown={brown}>
        {this.props.children}
      </Square>
    );
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};
