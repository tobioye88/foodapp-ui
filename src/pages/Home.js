import React, { Component } from 'react';
import Special from '../components/Special';
import Available from '../components/Available';
import Header from '../components/Header';

class Home extends Component {


    state = {
        specialFoodItems: [],
        availableFoodItems: [],
    }

    addToCart = (foodItem) => {
        this.props.addToCart(foodItem);
    }

    componentWillMount() {
        fetch('http://localhost:8888/v1/menu/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.map(foodItem => foodItem.quantity = 0);
                this.setState({ ...this.state, availableFoodItems: data });
            }).catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Header />
                <Special foodItems={this.state.specialFoodItems} addToCart={this.addToCart} />
                <Available foodItems={this.state.availableFoodItems} addToCart={this.addToCart} />
            </div>
        );
    }
}

export default Home;