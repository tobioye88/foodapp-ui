import React, {Component} from 'react';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';
import FoodItem from '../components/FoodItem';
import FoodService from '../services/FoodService';
import FoodCategoryService from '../services/FoodCategoryService';
import {CONFIG} from '../config/Config';
import {Icon, LeftButton, Loading, RightButton, Utils} from '../components/Utils';
import CartItem from '../components/CartItem';
import SideBar from "../components/SideBar";

class Home extends Component {

    state = {
        isLoading: true,
        foodList: [],
        foodCategories: []
    };

    addToCart = (foodItem) => {
        this.props.addToCart(foodItem);
    };

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

    showAddressCardDetails() {
        return (
            <div className="my-3 c-bg-secondary br-30 p-3">
                <div className="d-flex">
                    <div className="flex-grow-1">No 12 Wole Ariyo, Lekki Phase 1</div>
                    <div><button className="btn btn-link btn-sm">Change</button></div>
                </div>
                <div className="mt-3 d-flex">
                    <div className="flex-grow-1">5555 **** **** 3909</div>
                    <div><button className="btn btn-link btn-sm">Change</button></div>
                </div>
            </div>
        );
    }

    emptyCart() {
        this.props.parent.emptyCart();
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
                                    {(this.isLoggedIn()) ? <li className="list-inline-item cat-link px-2">History</li> : ''}
                                </ul>

                                <div className="row">
                                    {!this.isLoading() && !this.isListEmpty() ? this.getFoodList() : (this.isLoading() && this.isListEmpty()) ? this.showLoading() : ''}
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 bg-grey vh-100 fixed-top ml-auto p-0">
                            <div className="d-flex flex-column h-100">
                                <div className="alt-nav my-3 py-2 px-3">
                                    <div className="d-flex justify-content-end mb-3">
                                        {!this.isCartEmpty() && <div className="cart-counter box-shadow br-15 bg-white mx-3">{this.props.parent.state.itemsInCart}</div>}
                                        <button className="border-0 bg-transparent cart-counter br-15">
                                            {this.isLoggedIn() ? <Icon className="icn user-bold"/> : <Icon className="icn user"/>}
                                        </button>
                                    </div>
                                </div>

                                <div className="px-3">
                                    <h4>My Order
                                    {!this.isCartEmpty() && <button className="btn btn-sm text-danger btn-link" onClick={this.emptyCart.bind(this)}>Clear All</button>}
                                    </h4>
                                </div>
                                <div className="flex-grow-1 overflow-auto px-3">
                                    {this.isLoggedIn() ? this.showAddressCardDetails() : ''}
                                    {(!this.isCartEmpty()) ? (
                                        this.props.parent.state.cartItems.map((foodItem, i) =>
                                            <CartItem
                                                key={i}
                                                foodItem={foodItem}
                                                handleIncrement={(item) => this.props.parent.increaseItemQuantity(item)}
                                                handleDecrement={(item) => this.props.parent.decreaseItemQuantity(item)}
                                                handleRemove={(item) => this.props.parent.removeItem(item)}
                                            />)
                                    ) : <div className="text-muted text-center p-5">Add a tasty meal to cart</div>}
                                </div>
                                {!this.isCartEmpty() && (
                                    <div className="mt-auto py-4 border-top">

                                        <div className="d-flex text-muted px-3">
                                            <div className=""><small>Delivery</small></div>
                                            <div className="ml-auto"><small>{CONFIG.currencySymbol}{this.props.parent.state.total}</small></div>
                                        </div>
                                        <div className="d-flex px-3">
                                            <div className="">Total</div>
                                            <div className="ml-auto">{CONFIG.currencySymbol}{Utils.formatMoney(this.props.total)}</div>
                                        </div>
                                        <div className="mt-3">
                                            {this.isLoggedIn() && <LeftButton>Checkout</LeftButton>}
                                            {!this.isLoggedIn() && (
                                                <div className={"d-flex"}>
                                                    <RightButton className="d-block btn-secondary mr-3">Back</RightButton>
                                                    <LeftButton className="d-block btn-primary ml-3 flex-grow-1">Next</LeftButton>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <SideBar/>
            </div>
        );
    }
}

export default Home;