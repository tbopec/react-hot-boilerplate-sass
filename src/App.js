import React, { Component } from 'react';
import _ from 'lodash';
import Elements from './components/Elements';
import DepartureWidget from './components/DepartureAirports/DepartureWidget';
//import DestinationsWidget from './components/Example/DestinationsWidget';

import './App.scss';

export default class App extends Component {
    render() {
        return <DepartureWidget/>;
        //return <Elements/>;
    }
}
