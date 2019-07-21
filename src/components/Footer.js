import React, { Component } from 'react';
import { CONFIG } from './Config';

class Footer extends Component {
    footerStyle = {
        backgroundColor: CONFIG.primaryColor,
        color: '#ffffff'
    }
    render() {
        // return (
        //     <div className="py-5" style={this.footerStyle}>
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-md-3">FoodStack</div>
        //                 <div className="col-md-3"></div>
        //                 <div className="col-md-3"></div>
        //             </div>
        //         </div>
        //     </div>
        // );
        return (<div></div>)
    }
}

export default Footer;
