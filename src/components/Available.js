import React from 'react';
import {Items as foodItems} from './Items';
import FoodItem from './FoodItem';
import HasCartButton from './HasCartButton';

class Available extends HasCartButton {

    render() {
        return (
            <div className="container">
                <h3>Available</h3>
                <div className="row">
                    {foodItems.map((foodItem) => <FoodItem 
                        key={foodItem.id} 
                        foodItem={foodItem} 
                        className="col-md-3" 
                        addToCart={this.props.addToCart}
                    />)}
                </div>
            </div>
        );
    }
}

export default Available;

