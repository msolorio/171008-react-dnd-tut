import React from 'react';
import PropTypes from 'prop-types';

export default class Square extends React.Component {
  static propTypes = {
    brown: PropTypes.bool
  }

  render() {
    const { brown } = this.props;
    const fill = brown ? '#92441f' : '#f7e6d0';
    const stroke = brown ? '#f7e6d0' : '#92441f';

    return (
      <div className="square"
        style={{
          backgroundColor: fill,
          color: stroke
        }}>
        {this.props.children}
      </div>
    );
  }

}
