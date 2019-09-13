import React, { Component } from 'react'

export default class Banner extends Component {
    bannerStyle = {
        height: 150,
        backgroundColor: '#eeeeee'
    }
    render() {
        return (
            <div className="container mt-3 mb-4">
                <div className="br-30" style={this.bannerStyle}></div>
            </div>
        )
    }
}
