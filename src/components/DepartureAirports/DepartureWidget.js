import React, { Component } from 'react';
import _ from 'lodash';
import CheckboxContainer from './CheckboxContainer';

export default class DepartureWidget extends Component {
    constructor() {
        super();
        this.state = {
            selected: []
        };
    }
    handleChange(newValue) {
        this.setState({
            selected: newValue
        });
    }

    render() {
        const departures = [
                {
                    title: 'Germany',
                    value: ['DUS', 'TXL', 'CGN'],
                    children: [
                        {title: 'Dusseldorf', value: ['DUS']},
                        {title: 'Berlin', value: ['TXL']},
                        {title: 'Cologne', value: ['CGN']}
                    ]
                },
                {
                    title: 'GB',
                    value: ['GTW', 'LTN', 'MNC'],
                    children: [
                        {title: 'London', value: ['GTW', 'LTN']},
                        {title: 'Manchester', value: ['MNC']}
                    ]
                }
            ];
        return <CheckboxContainer options={ departures } value={ this.state.selected } onChange={ this.handleChange.bind(this) }/>;
    }
}