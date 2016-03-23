import React, { Component } from 'react';
import _ from 'lodash';
import Button from './Button';

export default class Elements extends Component {
    render() {
        let variable = 'variable';
        let raw = 'This is <b>very</b> unsecure';
        return (
            <div>
                <div>
                    <h3>Write:</h3>
                    { 'text or ' + variable }
                </div>
                <div>
                    <h3>Normal html elements:</h3>
                    <ul>
                        <li>
                            <div>div</div>
                        </li>
                        <li>
                            <span>span</span>
                        </li>
                        <li>
                            <p>p</p>
                        </li>
                        <li>
                            <a href="#href">a</a>
                        </li>
                        <li>
                            <img src="http://placehold.it/350x150"/>
                        </li>
                    </ul>
                </div>
                <div>
                    <Button active={true} subtitle="Other">Components</Button>
                </div>
                <div>
                    <h3>For:</h3>
                    { _.map(["first", "second", "third"], (e, key) => {
                        return <div key={key}>{ e }</div>;
                    })}
                </div>
                <div>
                    <h3>If:</h3>
                    { true && <div>If true content</div> }
                    { false && <div>If false content</div> }
                </div>
                <div>
                    <h3>Raw:</h3>
                    <div dangerouslySetInnerHTML={{__html: raw }}/>
                </div>
            </div>
        );
    }
}
