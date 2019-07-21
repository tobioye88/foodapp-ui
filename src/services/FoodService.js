import { CONFIG } from "../components/Config";
import BaseService from "./BaseService";

class FoodService extends BaseService {
    static get path() { return "menu" }

    static add(data, resolve = () => { }, reject = () => { }) {
        fetch(`${CONFIG.baseRoute}/v1/menu/add`, {
            method: 'post',
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

    getbyCategory(category, resolve = () => { }, reject = () => { }) { }

    search(keyword, resolve = () => { }, reject = () => { }) { }
}

export default FoodService;