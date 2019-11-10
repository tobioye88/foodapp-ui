import React, { Component } from 'react'

class Banner extends Component {
    bannerStyle = {
        height: 150
    };

    render() {
        return (
            <div className="container mt-3 mb-4">
                <div className="br-30 bg-grey" style={this.bannerStyle}></div>
            </div>
        )
    }
}

export default Banner;