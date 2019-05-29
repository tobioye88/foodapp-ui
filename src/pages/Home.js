import React, { Component } from 'react';
import Special from '../components/Special';
import Available from '../components/Available';
import Cart from '../components/Cart';

class Home extends Component {

  state = {
    cartItems: []
  }

  hasElement(array, element){
    let newArr = array.filter((el) => el.id === element.id);
    return newArr.length;
  }
  
  addToCart = (foodItem) =>{
    if(!this.hasElement(this.state.cartItems, foodItem)){
      console.log("Cart does not have item");
      this.setState({cartItems: this.state.cartItems.concat(foodItem)})
    }else{
      console.log("Cart has item\nIncrease quantity");
    }
  }

  render() {
    return (
      <div>
          <Cart cartItems={this.state.cartItems} />
          <Special addToCart={this.addToCart} />
          <Available addToCart={this.addToCart} />
      </div>
    );
  }
}

export default Home;