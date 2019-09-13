import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class About extends Component {
    componentWillMount() {
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.match.params.slug);
    }


    render() {
        return (
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <img className="img-fluid" src="/imgs/foodimage.jpg" alt="" />
                    </div>
                    <div className="col-md-4">About</div>
                </div>
            </div>
        )
    }
}


export default withRouter(About);