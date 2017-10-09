import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.Component {
  static propTypes = {
    black: PropTypes.bool
  };

  render() {
    const { black } = this.props;

    const fill = black ? 'black' : 'white';
    const pieceColor = black ? 'white' : 'black';

    return (
      <div className="Square" style={{
        backgroundColor: fill,
        color: pieceColor
      }}>
        {this.props.children}
      </div>
    );
  }
}
