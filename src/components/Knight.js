import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export function Knight(props) {

  const { connectDragSource, isDragging } = props;

  return connectDragSource(
    <div style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move'
    }}>
      &#9822;
    </div>
  );
}

Knight.proptypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
