import React, { Component } from 'react';
import Header from '../components/Header';

export default class Page404 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="jumbotron bg-white">
                        <h1 className="display-1 py-5 text-center text-muted">Page 404:<br />Page not found</h1>
                    </div>
                </div>
            </div>
        );
    }
}