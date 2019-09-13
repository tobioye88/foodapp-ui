import { CONFIG } from "../config/Config";
import { FoodList } from "../config/MockData";

class BaseService {
    static get path() { return "base" };

    static getAll(page, resolve = () => { }, reject = () => { }) {
        if (CONFIG.isMock) {
            setTimeout(() => {
                resolve(FoodList);
            }, CONFIG.mockLoadingTime);
            return;
        }

        fetch(`${CONFIG.baseRoute}/v1/${this.path}/all`)
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    }

    static add(data, resolve = () => { }, reject = () => { }) {
        fetch(`${CONFIG.baseRoute}/v1/${this.path}`, {
            method: 'POST',
            body: data
        })
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    }

    static delete(id, resolve = () => { }, reject = () => { }) {
        fetch(`${CONFIG.baseRoute}/v1/${this.path}/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    }

    static edit(data, resolve = () => { }, reject = () => { }) {
        fetch(`${CONFIG.baseRoute}/v1/${this.path}`, {
            method: 'PUT',
            body: data
        })
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    }

    static get(id, resolve = () => { }, reject = () => { }) {
        fetch(`${CONFIG.baseRoute}/v1/${this.path}/${id}`)
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));

    }

    static getWithPath(path, resolve = () => { }, reject = () => { }) {
        fetch(path)
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    }

    static postWithPath(path, data, resolve = () => { }, reject = () => { }) {
        fetch(path, {
            method: 'POST',
            body: data,
            headers: { 'Content-Type': 'application/json', }
        })
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    }

    static putWithPath(path, data, resolve = () => { }, reject = () => { }) {
        fetch(path, {
            method: 'PUT',
            body: data,
            headers: { 'Content-Type': 'application/json', }
        })
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    console.log(response.body);
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    }

    search(keyword, resolve = () => { }, reject = () => { }) { }
}

export default BaseService;