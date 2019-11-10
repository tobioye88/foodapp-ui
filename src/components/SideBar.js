import React, {Component} from 'react';
import {Icon} from "./Utils";
import {CONFIG} from "../config/Config";
import {Link} from "react-router-dom";

class SideBar extends Component {
    logoStyle = { color: CONFIG.primaryColor };

    links = [
        {icon: "icn close", friendlyName: "Available", path: "/available", isActive: true},
        {icon: "icn close restaurant", friendlyName: "Subscriptions", path: "/subscriptions", isActive: false},
        {icon: "icn close heart", friendlyName: "Free Meals", path: "/free_meals", isActive: false},
        {icon: "icn close restaurant", friendlyName: "History", path: "/history", isActive: false},
        {icon: "icn close heart", friendlyName: "My Favourite", path: "/my_favourite", isActive: false},
        {icon: "icn close heart", friendlyName: "My Account", path: "/account", isActive: false},
        {icon: "icn close c-card", friendlyName: "Payment", path: "/payment", isActive: false},
    ];

    renderLink(link, i) {
        return (<li className="nav-item" key={i}>
            <Link className="nav-link" to={link.path}>
                {link.icon !== '' && <Icon className={link.icon} alt="" />}
                <span>{link.friendlyName} {link.isActive && <span className="sr-only">(current)</span>}</span>
            </Link>
        </li>);
    }

    render(){
        return (
            <div className="sideBar position-fixed w-100 h-100" style={{top: 0, zIndex: 10000}}>
                <div className="container-fluid h-100" style={{backgroundColor: '#ffffffb3'}}>
                    <div className="col-md-3 bg-white">
                        <div className="pr-5">
                            <button className="sidebar-button py-0">
                                <Icon className={"icn close d-block"}/>
                            </button>
                            <Link className="navbar-brand font-weight-bold" to="/" style={this.logoStyle}>{CONFIG.appName}</Link>
                        </div>
                        <ul className="list-unstyled">
                            {this.links.map((el, i) => this.renderLink(el, i))}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }

}

export default SideBar;