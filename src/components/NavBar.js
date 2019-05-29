import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {
        isNavBarOpen: false
    }

    toggleNavButton = () =>{
        console.log("Toggling navbar");
        this.setState({isNavBarOpen: !this.state.isNavBarOpen});
    }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/" style={{color: this.props.navLinkColor}}>FoodStack</a>
            <button className="navbar-toggler border-0" style={{color: this.props.navLinkColor}} type="button" onClick={this.toggleNavButton} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={'collapse navbar-collapse ' + (this.state.isNavBarOpen? 'show' : '')} id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
  }
}

export default NavBar;