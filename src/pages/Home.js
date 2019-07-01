import React, { Component } from 'react';
import Special from '../components/Special';
import Available from '../components/Available';

class Home extends Component {
  
  addToCart = (foodItem) =>{
    this.props.addToCart(foodItem);
  }

  render() {
    return (
      <div>
          {/* <Cart cartItems={this.state.cartItems} /> */}
          <Special addToCart={this.addToCart} />
          <Available addToCart={this.addToCart} />
      </div>
    );
  }
}

export default Home;