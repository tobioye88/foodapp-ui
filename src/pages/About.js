import React, { Component } from 'react';
import { Heading } from '../components/Utils';
import Header from '../components/Header';

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Heading text="About" />
                    <p></p>
                </div>
            </div>
        );
    }
}

