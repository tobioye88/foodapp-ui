import React, { Component } from 'react';
import Special from '../components/Special';
import Available from '../components/Available';

class Home extends Component {

    addToCart = (foodItem) => {
        this.props.addToCart(foodItem);
    }

    componentWillMount() {
        fetch('http://localhost:8888/v1/food_items/all')
            .then(response => response.json())
            .then(data => console.log(data));
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