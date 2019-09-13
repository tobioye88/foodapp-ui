import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
    escapeMargin = {
        marginTop: 100
    }

    topStyle = {
        top: 20
    }

    render() {
        return (
            <div>
                <div className="fixed-top" style={this.topStyle}>
                    <div className="container-fluid">
                        <NavBar navLinkColor="#ffffff" />
                    </div>
                </div>
                {/* <div style={this.escapeMargin}></div> */}
            </div>
        );
    }
}

export default Header;
