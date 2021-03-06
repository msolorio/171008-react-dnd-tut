import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Knight from './Knight';
import BoardSquare from './BoardSquare';

export class Board extends React.Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    return (x === knightX && y === knightY) && <Knight />;
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i}
        style={{width: '12.5%',
        height: '12.5%'}}>
        <BoardSquare x={x} y={y}
          knightPosition={this.props.knightPosition}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i=0; i<64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
