import React, { Component } from 'react';
import IconButton from '../components/Utils';
import { CONFIG } from '../config/Config';

class CartItem extends Component {
    render() {
        let { foodItem, handleRemove, handleIncrement, handleDecrement } = this.props;
        return (
            <div className="d-flex mb-3">
                <div className="d-flex flex-column">
                    <IconButton
                        iconClass="up"
                        handleClick={() => handleIncrement(foodItem)} />
                    <div className="text-center">{foodItem.quantity}</div>
                    <IconButton
                        iconClass="down"
                        handleClick={() => handleDecrement(foodItem)}
                    />
                </div>
                <div className="p-2"><img className="br-15" src={`${CONFIG.baseRouteImg}/v1/file/${foodItem.imagePath}`} alt={foodItem.name} height="50" /></div>
                <div className="p-2">
                    <div className=""><small className="text-muted">{foodItem.name}</small></div>
                    <div className="m-0">{CONFIG.currencySymbol}{foodItem.quantity * foodItem.price}</div>
                </div>
                <div className="p-2 ml-auto">
                    <IconButton
                        iconClass="close"
                        handleClick={() => handleRemove(foodItem)}
                    />
                </div>
            </div>
        )
    }
}

export default CartItem;