import React from 'react';
import { Items as foodItems } from './ItemsList';
import FoodItem from './FoodItem';
import HasCartButton from './HasCartButton';

class Available extends HasCartButton {

    constructor(props) {
        super(props);
        this.foodItems = foodItems;
    }

    render() {
        return (
            <div className="container">
                <h3 className="py-3">Available</h3>
                <div className="row">
                    {this.foodItems.map((foodItem) => <FoodItem
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

