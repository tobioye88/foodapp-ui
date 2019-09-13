import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config/Config';

class NavBar extends Component {
    bannerLogoColour = { color: CONFIG.primaryColor }
    navLinkColor = { color: this.props.navLinkColor }
    searchProps = {
        inputStyle: {
            borderRadius: 30,
            backgroundColor: '#f3f3f3'
        },
        inputClassName: "no-class"
    }

    constructor(props) {
        super(props);

        this.state = {
            isNavBarOpen: false
        }
    }

    componentWillMount() {
        // console.log(CONFIG);
    }

    toggleNavButton = () => {
        console.log("Toggling navbar");
        this.setState({ isNavBarOpen: !this.state.isNavBarOpen });
    }

    render() {
        // return (<div></div>);
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top my-3 bg-white">
                <div className="px-5">
                    <Link className="navbar-brand font-weight-bold" to="/" style={this.bannerLogoColour}>FoodStack</Link>
                </div>
                <div className="flex-grow-1">
                    <input className="form-control border-0 bg-grey br-30" style={{ height: 50 }} />
                </div>
            </ nav>
        );
    }

    renderLink(i, link) {
        return (<li className="nav-item" key={i}>
            <Link className="nav-link" to={link.path}>
                {link.icon !== '' ? <img src={link.icon} alt="" /> : ''}
                {link.friendlyName} {false ? <span className="sr-only">(current)</span> : ''}
            </Link>
        </li>);
    }
}

export default NavBar;