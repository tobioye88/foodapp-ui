import BaseService from "./BaseService";
import { CONFIG } from "../config/Config";
import { CategoryList } from "../config/MockData";

class FoodCategoryService extends BaseService {
    static get path() { return "categories" };

    static getAll(page, resolve = () => { }, reject = () => { }) {
        if (CONFIG.isMock) {
            setTimeout(() => resolve(CategoryList), CONFIG.mockLoadingTime);
            return;
        }

        super.getAll(page, resolve, reject);
    }
}

export default FoodCategoryService;