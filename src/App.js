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
    //cartItems[item: object},]
    state = {
        itemsInCart: 0,
        subTotal: 0,
        total: 0,
        cartItems: []
    }

    hasElement(array, element) {
        if (array.length === 0) {
            return false;
        }

        let newArr = array.filter((el, i) => el.id === element.id);

        return newArr.length >= 1;
    }

    addToCart(item) {
        let { itemsInCart, subTotal } = this.state;
        if (!this.hasElement(this.state.cartItems, item)) {
            itemsInCart++;
            this.state.cartItems.push(item);
            subTotal = this.calculateSubTotal(this.state.cartItems);
            let total = this.getTotal();
            this.setState({ ...this.state, cartItems: [...this.state.cartItems], itemsInCart, subTotal, total });
        } else {
            this.increaseItemQuantity(item);
        }
    }

    calculateSubTotal(arr) {
        let total = 0;
        arr.forEach((el, i) => {
            total += el.price * el.quantity;
        });
        return total
    }

    getTotal() {
        let sum = 0;
        this.state.cartItems.map((foodItem) => sum += (foodItem.quantity * foodItem.price));
        this.setState({ ...this.state, total: sum })
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
        let subTotal = this.calculateSubTotal(newCartItems);
        let total = this.getTotal();
        this.setState({ ...this.state, cartItems: newCartItems, itemsInCart, subTotal, total });
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
        let subTotal = this.calculateSubTotal(newCartItems);
        this.setState({ ...this.state, cartItems: newCartItems, itemsInCart, subTotal, total });
    }

    removeItem(item) {
        console.log("Removing Item: ");
        let { itemsInCart } = this.state;

        let itemPosition = -1;
        this.state.cartItems.filter((el, i) => {
            if (el.id === item.id) {
                console.log("position", i);

                itemPosition = i;
                itemsInCart -= el.quantity;
                return true;
            }
            return false;
        });
        if (itemPosition > -1) {
            console.log("splicing...");

            this.state.cartItems.splice(itemPosition, 1);
            var subTotal = this.calculateSubTotal(this.state.cartItems);
            this.setState({ ...this.state, itemsInCart, subTotal });
        }
    }

    isCartEmpty() {
        return this.state.itemsInCart === 0;
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
