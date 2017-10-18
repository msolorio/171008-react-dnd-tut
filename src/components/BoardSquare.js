import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { canMoveKnight, moveKnight } from '../Game';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  drop(props) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export function BoardSquare(props) {

    const { x, y, connectDropTarget, isOver } = props;
    const brown = (x + y) % 2 === 1;

    return connectDropTarget(
      <div className="squareWrap">
        <Square brown={brown}>
          {props.children}
        </Square>
        {isOver && <div className="squareOverlay"/>}
      </div>
    );
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
