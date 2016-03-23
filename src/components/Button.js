import React, { Component } from 'react';
import _ from 'lodash';

export default class Button extends Component {
  render() {
    return (
      <button>
        <h2>{ this.props.children }</h2>
        <span>{ this.props.subtitle }</span>
      </button>
    );
  }
}
Button.propTypes = {
    subtitle: React.PropTypes.string
};