import React, { Component } from 'react';
import _ from 'lodash';
import CheckboxItem from './CheckboxItem';

export default class CheckboxContainer extends Component {
  render() {
    return (
      <div>
          { _.map(this.props.options, (option, key) => {
              return <CheckboxItem option={option} value={ this.props.value } key={key} onChange={ this.props.onChange }/>
          }) }
      </div>
    );
  }
}
CheckboxContainer.propTypes = {
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired
};