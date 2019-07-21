import React from 'react';
import FoodItem from './FoodItem';
import { Items as foodItems } from './ItemsList';
import HasCartButton from './HasCartButton';
import { Heading } from './Utils';

class Special extends HasCartButton {
    style = { backgroundImage: 'linear-gradient(0deg, rgba(232, 232, 232, 1), transparent)' }

    constructor(props) {
        super(props);
        this.foodItems = foodItems;
    }

    render() {
        return (
            <div className="mb-5" style={this.style}>
                <div className="container">
                    <Heading text="Special" />
                    <div className="row flex-row flex-nowrap horizontal-scrollable pb-5">
                        {this.foodItems.map((foodItem) => {
                            return <FoodItem
                                key={foodItem.id}
                                foodItem={foodItem}
                                className="col-md-3 col-8"
                                addToCart={this.props.addToCart}
                            />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Special;
