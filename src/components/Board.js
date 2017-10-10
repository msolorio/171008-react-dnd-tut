import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Square from './Square';
import Knight from './Knight';
import { moveKnight, canMoveKnight } from '../Game';

export class Board extends React.Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const brown = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (knightX === x && knightY === y)
      ? <Knight />
      : null;

    return (
      <div key={i}
        className="squareWrap"
        onClick={() => this.handleSquareClick(x, y)}>
        <Square brown={brown}>
          {piece}
        </Square>
      </div>
    )
  }

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    };
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
