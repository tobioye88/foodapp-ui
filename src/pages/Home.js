import React, { Component } from 'react';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import FoodItem from '../components/FoodItem';
import FoodService from '../services/FoodService';
import FoodCategoryService from '../services/FoodCategoryService';
import Loading from '../components/Utils';
import { CONFIG } from '../config/Config';

class Home extends Component {

    state = {
        isLoading: true,
        foodList: [],
        foodCategories: []
    }

    addToCart = (foodItem) => {
        this.props.addToCart(foodItem);
    }

    isLoggedIn() {
        return false;
    }

    isListEmpty() {
        return this.state.foodList.length === 0;
    }

    isLoading() {
        return this.state.isLoading;
    }

    getFoodList() {
        return (this.state.foodList.map(foodItem => <FoodItem
            key={foodItem.id}
            foodItem={foodItem}
            className="col-md-3 col-8 mb-5"
            addToCart={this.props.addToCart} />));
    }

    componentDidMount() {
        FoodCategoryService.getAll(1, (data) => this.setState({ ...this.state, foodCategories: data }));
        FoodService.getAll(1, (data) => { this.setState({ ...this.state, foodList: data, isLoading: false }) });
    }

    showLoading() {
        return (<div className="col-12"><Loading className="text-danger" /></div>);
    }

    isCartEmpty() {
        return this.props.parent.isCartEmpty();
    }

    getCategoryElement(cat, i) {
        let classNames = 'list-inline-item cat-link px-2 ';
        classNames += (cat.active) ? 'active' : ''
        return (<li key={i} className={classNames}>{cat.name}</li>)
    }
    getCartItems(foodItem, i) {
        return (this.props.parent.state.cartItems.map((foodItem, i) =>
            <div className="d-flex mb-3">
                <div className="p-2"><img className="br-15" src={`${CONFIG.baseRouteImg}/v1/file/${foodItem.imagePath}`} alt={foodItem.name} height="50" /></div>
                <div className="p-2">
                    <div className="m-0">
                        <small>{foodItem.quantity} X</small>
                    </div>
                    <div className="">{foodItem.name}</div>
                </div>
                <div className="p-2 ml-auto">{CONFIG.currencySymbol}{foodItem.price}</div>
            </div>
        ));
    }

    render() {
        return (
            <div>
                <div className="container-fluid full-height">
                    <div className="row align-items-stretch full-height">
                        <div className="col-md-9">
                            <NavBar />
                            <Banner />
                            <div className="container">
                                <ul className="list-unstyled list-inline">
                                    {this.state.foodCategories.map((cat, i) => this.getCategoryElement(cat, i))}
                                    {(this.isLoggedIn()) ? <li className="list-inline-item px-2">History</li> : ''}
                                </ul>

                                <div className="row">
                                    {!this.isLoading() && !this.isListEmpty() ? this.getFoodList() : (this.isLoading() && this.isListEmpty()) ? this.showLoading() : 'Default'}
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 bg-grey">
                            <div className="alt-nav my-3 sticky-top py-2 ">
                                <div className="d-flex justify-content-end mb-3">
                                    {(this.isLoggedIn()) ? 'Logged in' : ''}
                                    {(!this.isCartEmpty()) ? <div className="cart-counter box-shadow">{this.props.parent.state.itemsInCart}</div> : ''}
                                </div>
                                <div>My Order</div>
                                {(!this.isCartEmpty()) ? this.getCartItems() : <div className="text-muted text-center p-5">Add a tasty meal to cart</div>}
                            </div>
                            <div className="">
                                button and tota
                                <div className="d-flex text-muted">
                                    <div className=""><small>Delivery</small></div>
                                    <div className="ml-auto"><small>{CONFIG.currencySymbol}{this.props.parent.state.total}</small></div>
                                </div>
                                <div className="d-flex">
                                    <div className="">Total</div>
                                    <div className="ml-auto">{CONFIG.currencySymbol}{this.props.total}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sideBar absolute-position"></div>
            </div>
        );
    }
}

export default Home;