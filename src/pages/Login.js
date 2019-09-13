import React, { Component } from 'react';

export default class Login extends Component {
    state = {
        buttonDisabled: true,
        details: {
            username: "",
            password: ""
        }
    }
    render() {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center">
                <div className="w-25">
                    <div className="card">
                        <div className="card-header">
                            <span className="card-title">Login</span>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" type="password" />
                                </div>
                                <div className="form-group">
                                    <button disabled={this.state.buttonDisabled} className="btn btn-primary btn-block">Login</button>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-link btn-block">Create an account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
