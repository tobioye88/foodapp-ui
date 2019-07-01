import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Page404 from './pages/Page404';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  //cartItems[{item: object, quantity: number},]
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

    let newArr = array.filter((el, i) => el.item.id === element.id);

    return newArr.length >= 1;
  }

  addToCart(item) {
    let {itemsInCart, subTotal, total} = this.state; 
    if (!this.hasElement(this.state.cartItems, item)) {
      itemsInCart++;
      this.state.cartItems.push({ item, quantity: 1 });
      subTotal = this.calculateSubTotal(this.state.cartItems);
      this.setState({ ...this.state, cartItems: [...this.state.cartItems], itemsInCart, subTotal });
    } else {
      this.increaseItemQuantity(item);
    }
  }

  calculateSubTotal(arr){
    let total = 0;
    arr.forEach((el, i) => {
      total += el.item.price * el.quantity;
    });
    return total
  }

  increaseItemQuantity(item) {
    let {itemsInCart} = this.state; 
    let newCartItems = this.state.cartItems.map((el, i) => {
      if (el.item.id === item.id) {
        el.quantity++;
        itemsInCart++;
      }
      return el;
    });
    let subTotal = this.calculateSubTotal(newCartItems);
    this.setState({ ...this.state, cartItems: newCartItems, itemsInCart, subTotal });
  }

  decreaseItemQuantity(item){
    let {itemsInCart} = this.state; 
    let newCartItems = this.state.cartItems.map((el, i) => {
      if (el.item.id === item.id) {
        if(el.quantity > 1){
          el.quantity--;
          itemsInCart--;
        }
      }
      return el;
    });
    let subTotal = this.calculateSubTotal(newCartItems);
    this.setState({ ...this.state, cartItems: newCartItems, itemsInCart, subTotal });
  }

  removeItem(item){
    console.log("Removing Item: ",);
    let {itemsInCart} = this.state; 

    let itemPosition = -1;
    this.state.cartItems.filter((el, i) => {
      if(el.item.id === item.id){
        console.log("position", i);
        
        itemPosition = i;
        itemsInCart -= el.quantity;
        return true;
      }
      return false;
    });
    if(itemPosition > -1){
      console.log("splicing...");
      
      this.state.cartItems.splice(itemPosition, 1);
      var subTotal = this.calculateSubTotal(this.state.cartItems);
      this.setState({...this.state, itemsInCart, subTotal});
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Home addToCart={this.addToCart.bind(this)} />} />
          <Route path="/about" component={About} />
          <Route path="/cart" render={(props) => <Cart addToCart={this.addToCart.bind(this)} cartItems={this.state.cartItems} parent={this} />} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
