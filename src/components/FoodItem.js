import React, { Component } from 'react';
import { CONFIG } from '../config/Config';
import { withRouter } from 'react-router-dom';
import { Utils } from './Utils';


class FoodItem extends Component {
    cardStyle = {
        imageStyle: {
            borderRadius: '30px',
            border: '4px solid white',
        }
    }

    increaseItemQuantity(item) {
        this.props.parent.increaseItemQuantity(item)
    }

    decreaseItemQuantity(item) {
        console.log("Cart: decrementing item: ", item.id);
        this.props.parent.decreaseItemQuantity(item)
    }

    removeItem(item) {
        this.props.parent.removeItem(item);
    }

    goToFoodDetails() {
        console.log("changing path");
        console.log(this.props.history);
        this.props.history.push('/details/' + this.props.foodItem.id, {});
    }

    getFoodFooter() {
        return (
            <div className="card-footer text-right border-0 bg-transparent px-4 pb-4 pt-0">
                <button className="btn btn-primary btn-sm btn-rounded" onClick={this.props.addToCart.bind(this, this.props.foodItem)}>+ Add To Cart</button>
            </div>);
    }

    getCartFooter(item, quantity) {
        return (
            <div className="card-footer border-0 bg-white clearfix px-4 pb-4">
                <div className="float-left">
                    <button className="btn btn-outline-secondary btn-sm" onClick={this.decreaseItemQuantity.bind(this, item)}>-</button>
                    <span className="p-2">{quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm" onClick={this.increaseItemQuantity.bind(this, item)}>+</button>
                </div>
                <div className="float-right">
                    <button className="btn btn-danger btn-sm btn-rounded" onClick={this.removeItem.bind(this, item)}>Remove</button>
                </div>
            </div>);
    }

    render() {
        const { name, price, imagePath, quantity } = this.props.foodItem;
        console.log(this.props.foodItem);
        return (
            <div className={this.props.className}>
                <div className="food-item card box-shadow">
                    <img className="card-img" src={`${CONFIG.baseRouteImg}/v1/file/${imagePath}`} alt="Food" onClick={this.goToFoodDetails.bind(this, this.props.foodItem)} />
                    <div className="card-body d-flex py-2 px-3">
                        <div className="" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            <p className="mb-0 small text-muted text-nowrap">{name}</p>
                            <p className="mb-0 ">{CONFIG.currencySymbol}{Utils.formatMoney(price)}</p>
                        </div>
                    </div>
                    {(this.props.isCart) ? this.getCartFooter(this.props.foodItem, quantity) : this.getFoodFooter()}
                </div>
            </div>
        );
    }
}

export default withRouter(FoodItem);
