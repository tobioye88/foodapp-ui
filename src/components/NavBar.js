import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from './Config';

class NavBar extends Component {
    constructor(props){
        super(props);

        this.CONFIG = CONFIG;
        this.state = {
            isNavBarOpen: false
        }
    }

    componentWillMount(){
        // console.log(CONFIG);
    }

    toggleNavButton = () =>{
        console.log("Toggling navbar");
        this.setState({isNavBarOpen: !this.state.isNavBarOpen});
    }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/" style={{color: this.props.navLinkColor}}>FoodStack</Link>
            <button className="navbar-toggler border-0" style={{color: this.props.navLinkColor}} type="button" onClick={this.toggleNavButton} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={'collapse navbar-collapse ' + (this.state.isNavBarOpen? 'show' : '')} id="navbarNav">
            <ul className="navbar-nav ml-auto">
                {this.CONFIG.navLinks.map((link, i) => {
                    return (
                    <li className="nav-item active" key={i}>
                        <Link 
                            className="nav-link" 
                            to={link.path}>
                                {link.icon !== ''? <img src={link.icon} alt=""/> : ''} 
                                {link.friendlyName} {false ? <span className="sr-only">(current)</span> : ''}
                        </Link>
                    </li>
                    )
                })}
            </ul>
            </div>
        </nav>
    );
  }
}

export default NavBar;