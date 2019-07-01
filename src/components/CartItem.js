import React, { Component } from 'react';
import { CONFIG } from './Config';

class CartItem extends Component {
    
    cartStyle = {
        imageStyle: {
            borderBottomRightRadius: '30px',
            borderBottomLeftRadius: '30px',
        }
    }

    increaseItemQuantity(item){
        this.props.parent.increaseItemQuantity(item)
    }
    
    decreaseItemQuantity(item){
        console.log("Cart: decrementing item: ", item.id);
        this.props.parent.decreaseItemQuantity(item)
    }

    removeItem(item){
        this.props.parent.removeItem(item);
    }

    render() {
        const { item, quantity } = this.props.item;
        const { name, price, image } = item;
        return (
            <div className="col-md-4">
                <div className="card mb-3 bg-light shadow" style={{ overflow: "hidden" }}>
                    <img className="card-img" src={image} alt="" style={this.cartStyle.imageStyle} />
                    <div className="card-body">
                        <p className="mb-0 text-muted"><small>{name}</small></p>
                        <p className="">{CONFIG.currencySymbol}{CONFIG.formatMoney(price)}</p>
                        <div className="clearfix">
                            <div className="float-left">
                                <button className="btn btn-outline-secondary btn-sm" onClick={this.decreaseItemQuantity.bind(this, item)}>-</button>
                                <span className="p-2">{quantity}</span>
                                <button className="btn btn-outline-secondary btn-sm" onClick={this.increaseItemQuantity.bind(this, item)}>+</button>
                            </div>
                            <div className="float-right">
                                <button className="btn btn-danger btn-sm" onClick={this.removeItem.bind(this, item)}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;
