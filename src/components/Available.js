import React from 'react';
import FoodItem from './FoodItem';
import HasCartButton from './HasCartButton';
import { Heading } from './Utils';

class Available extends HasCartButton {

    constructor(props) {
        super(props);
        this.foodItems = props.foodItems;
    }

    render() {
        const { foodItems } = this.props;
        console.log(foodItems)
        return (
            <div className="container">
                <Heading text="Available" />
                <div className="row">
                    {foodItems.map((foodItem) => <FoodItem
                        key={foodItem.id}
                        foodItem={foodItem}
                        className="col-md-3 mb-5"
                        addToCart={this.props.addToCart}
                    />)}
                </div>
            </div>
        );
    }
}

export default Available;

