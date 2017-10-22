import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';
import dragPreviewSrc from '../dragPreviewSrc';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

export class Knight extends Component {

  componentDidMount() {
    const img = new Image();
    img.src = dragPreviewSrc;
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {
    const { connectDragSource, isDragging } = this.props;

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
}

Knight.proptypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
