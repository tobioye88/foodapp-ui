import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Page404 from './pages/Page404';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';

class App extends Component {
    state = {
        isNavBarOpen: false,
        itemsInCart: 0,
        total: 0,
        cartItems: []
    };

    hasElement(array, element) {
        if (array.length === 0) {
            return false;
        }

        let newArr = array.filter((el) => el.id === element.id);

        return newArr.length >= 1;
    }

    addToCart(item) {
        let { itemsInCart } = this.state;
        if (!this.hasElement(this.state.cartItems, item)) {
            itemsInCart++;
            this.state.cartItems.unshift({ ...item, quantity: 1 });
            let total = this.getTotal();
            this.setState({ ...this.state, cartItems: [...this.state.cartItems], itemsInCart, total });
        } else {
            this.increaseItemQuantity(item);
        }
    }

    getTotal() {
        let sum = 0;
        this.state.cartItems.map((foodItem) => sum += (foodItem.quantity * foodItem.price));
        this.setState({ ...this.state, total: sum });
        return sum;
    }

    increaseItemQuantity(item) {
        let { itemsInCart } = this.state;
        let newCartItems = this.state.cartItems.map((el, i) => {
            if (el.id === item.id) {
                el.quantity++;
                itemsInCart++;
            }
            return el;
        });
        let total = this.getTotal();
        this.setState({ ...this.state, cartItems: newCartItems, itemsInCart, total });
    }

    decreaseItemQuantity(item) {
        let { itemsInCart } = this.state;
        let newCartItems = this.state.cartItems.map((el, i) => {
            if (el.id === item.id) {
                if (el.quantity > 1) {
                    el.quantity--;
                    itemsInCart--;
                }
            }
            return el;
        });
        let total = this.getTotal();
        this.setState({ ...this.state, cartItems: newCartItems, itemsInCart, total });
    }

    removeItem(item) {
        let { itemsInCart } = this.state;

        let itemPosition = -1;
        this.state.cartItems.filter((el, i) => {
            if (el.id === item.id) {
                itemPosition = i;
                itemsInCart -= el.quantity;
                return true;
            }
            return false;
        });

        if (itemPosition > -1) {
            this.state.cartItems.splice(itemPosition, 1);
            this.setState({ ...this.state, itemsInCart, total: this.getTotal() });
        }
    }

    isCartEmpty() {
        return this.state.itemsInCart === 0;
    }

    emptyCart() {
        this.setState({ ...this.state, itemsInCart: 0, cartItems: [], total: 0 });
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <Home addToCart={this.addToCart.bind(this)} total={this.state.total} parent={this} />} />
                    <Route path="/about" component={About} />
                    <Route path="/cart" render={(props) => <Cart addToCart={this.addToCart.bind(this)} cartItems={this.state.cartItems} parent={this} />} />
                    <Route path="/details/:slug" validate={parms => console.log(parms)} render={(props) => <Details props={props} />} />
                    <Route path="/login" component={Login} />
                    <Route path="/user" component={Login} />
                    <Route path="/admin" component={Dashboard} />
                    <Route component={Page404} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
