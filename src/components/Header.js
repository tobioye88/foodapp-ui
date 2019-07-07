import React, { Component } from 'react';
import NavBar from './NavBar';
import { CONFIG } from './Config';

class Header extends Component {
    render() {
        return (
            <div className="shadow sticky-top" style={{ backgroundColor: CONFIG.primaryColor, color: '#ffffff' }}>
                <div className="container">
                    <NavBar navLinkColor="#ffffff" />
                </div>
            </div>
        );
    }
}

export default Header;
