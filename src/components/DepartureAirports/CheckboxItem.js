import React, { Component } from 'react';
import _ from 'lodash';

export default class CheckboxItem extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }
    isChecked() {
        let { option, value } = this.props,
            common = _.intersection(option.value, value),
            checked = common.length === option.value.length;
        return checked;
    }
    handleChange() {
        let { option, value } = this.props,
            checked = this.isChecked(),
            newValue = [];
        if (checked) {
            newValue = _.filter(value, (val, e) => {
                return option.value.indexOf(val) < 0;
            });
        } else {
            newValue = value.concat(option.value);
            newValue = _.uniq(newValue);
        }
        this.props.onChange(newValue);
    }
    toggleOpen() {
        let {option} = this.props;
        if (!option.children) {
            return;
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let { option, value } = this.props,
            checked = this.isChecked(),
            label = option.children?(
                this.state.isOpen?'- ':'+ '
            ):null;
        return (
            <div>
                <input type="checkbox" checked={ checked } value={ option.value }
                onChange={this.handleChange.bind(this)}/>
                <span onClick={ this.toggleOpen.bind(this) }>{label}{ option.title }</span>
                { option.children && this.state.isOpen && <div>
                    { _.map(option.children, (suboption, key) => {
                        return <CheckboxItem option={ suboption } value={ value } key={ key } onChange={ this.props.onChange }/>;
                    }) }
                </div>}
            </div>
        );
    }
}
CheckboxItem.propTypes = {
    option: React.PropTypes.object.isRequired,
    value: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired
};