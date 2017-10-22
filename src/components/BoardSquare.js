import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { canMoveKnight, moveKnight } from '../Game';
import { ItemTypes } from '../Constants';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  },

  drop(props) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function getOverlay(isOver, canDrop, x, y, knightPosition) {

  const [knightX, knightY] = knightPosition;

  switch(true) {
    case x === knightX && y === knightY:
      return null;
    case isOver && !canDrop:
      return <div className='squareOverlay squareOverlay-red' />;
    case !isOver && canDrop:
      return <div className='squareOverlay squareOverlay-yellow' />;
    case isOver && canDrop:
      return <div className='squareOverlay squareOverlay-green' />;
    default:
      return null;
  }
}

export function BoardSquare(props) {

    const { x, y, connectDropTarget, isOver, canDrop, knightPosition } = props;
    const brown = (x + y) % 2 === 1;

    return connectDropTarget(
      <div className="squareWrap">
        <Square brown={brown}>
          {props.children}
        </Square>
        {getOverlay(isOver, canDrop, x, y, knightPosition)}
      </div>
    );
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
