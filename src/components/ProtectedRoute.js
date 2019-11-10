import React, { Component } from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import AuthService from "../services/AuthService";

class ProtectedRoute extends Component {


    render() {
        const { redirectTo = "/", component: Component, ...rest } = this.props;
        return (
            <Route {...rest} render={(props) => (
                AuthService.isAuthenticated() ? <Component {...props} /> : <Redirect to={redirectTo} />
            )} />
        )
    }
}

export default ProtectedRoute;