import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="fixed-top" style={{ top: 20 }}>
                    <div className="container">
                        <NavBar navLinkColor="#ffffff" />
                    </div>
                </div>
                <div style={{ marginTop: 100 }}></div>
            </div>
        );
    }
}

export default Header;
