import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config/Config';

class NavBar extends Component {
    logoStyle = { color: CONFIG.primaryColor };

    constructor(props) {
        super(props);

        this.state = {
            isNavBarOpen: false,
            searchKey: ''
        };
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    componentWillMount() {
        // console.log(CONFIG);
    }

    toggleNavButton = () => {
        console.log("Toggling navbar");
        this.setState({ isNavBarOpen: !this.state.isNavBarOpen });
    };

    handleSearchChange(event) {
        console.log(event.target.value);
        let searchKey = event.target.value;
        this.setState({ ...this.state, searchKey });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3 bg-white">
                <div className="pr-5">
                    <button className="sidebar-button py-3">
                        <div/>
                        <div/>
                    </button>
                    <Link className="navbar-brand font-weight-bold" to="/" style={this.logoStyle}>{CONFIG.appName}</Link>
                </div>
                <div className="flex-grow-1">
                    <input
                        type={"search"}
                        className="form-control border-0 bg-grey br-30"
                        style={{ height: 50, paddingLeft: 50 }}
                        value={this.state.searchKey}
                        onChange={this.handleSearchChange} />
                    <button className="bg-transparent border-0 cart-counter position-absolute" disabled style={{ top: 16 }}>
                        <i className="icn search d-block"></i>
                    </button>
                </div>
            </ nav>
        );
    }
}

export default NavBar;