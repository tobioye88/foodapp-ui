import React from 'react';
import FoodItem from './FoodItem';
import {Items as foodItems} from './Items';
import HasCartButton from './HasCartButton';

class Special extends HasCartButton {

    constructor(props){
        super(props);
        this.foodItems = foodItems;
    }

    render() {
        return (
            <div className="mb-5" style={{backgroundColor: '#e8e8e8'}}>
                <div className="container">
                    <h3 className="pt-3">Special</h3>
                    <div className="row flex-row flex-nowrap horizontal-scrollable">
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
