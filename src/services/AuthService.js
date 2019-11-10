import { CONFIG } from "../config/Config";

class AuthService {

    isValidToken(token) {
        //todo: implement
        return token.length > 0;
    }

    static isAuthenticated() {
        return this.isValidToken(localStorage.getItem('token'));
    }

    static authenticate(username, password, resolve, reject) {
        fetch(`${CONFIG.baseRoute}/oauth/token`)
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    console.log(response.body);
                    throw new Error("Error occurred Status: " + response.status);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem("token", data.token);
                resolve(data);
            })
            .catch(error => reject(error));
    }

    static signout(resolve, reject) {
        localStorage.removeItem("token");
        fetch(`${CONFIG.baseRoute}/oauth/revoke-token`)
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    console.log(response.body);
                    throw new Error("Error occurred Status: " + response.status);
                }
                return response.json();
            })
            .then(data => { })
            .catch(error => reject(error));
    }
}

export default AuthService;