import { CONFIG } from "../components/Config";

class FoodItemService {

    static getAll(page, resolve = () => { }, reject = () => { }) {
        fetch(`${CONFIG.baseRoute}/v1/food_items/all`)
            .then(response => {
                if (response.status >= 300 || response.status < 200) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    }
}

export default FoodItemService;