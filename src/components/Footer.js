import React, { Component } from 'react';
import {CONFIG} from './Config';

class Footer extends Component {
    render() {
        return (
            <div className="py-5" style={{backgroundColor: CONFIG.primaryColor, color: '#ffffff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">FoodStack</div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
