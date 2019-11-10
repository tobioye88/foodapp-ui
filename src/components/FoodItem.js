import React, { Component } from 'react';
import { CONFIG } from '../config/Config';
import { withRouter } from 'react-router-dom';
import { Utils } from './Utils';


class FoodItem extends Component {

    removeItem(item) {
        this.props.parent.removeItem(item);
    }

    goToFoodDetails() {
        console.log("changing path");
        console.log(this.props.history);
        this.props.history.push('/details/' + this.props.foodItem.id, {});
    }

    render() {
        const { name, price, imagePath } = this.props.foodItem;
        return (
            <div className={this.props.className}>
                <div className="food-item card box-shadow">
                    <img className="card-img" src={`${CONFIG.baseRouteImg}/v1/file/${imagePath}`} alt={"Image of:" + name} onClick={this.goToFoodDetails.bind(this, this.props.foodItem)} />
                    <div className="card-body d-flex py-2 px-2">
                        <div className="flex-grow-1" style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            <p className="mb-0 small text-muted text-nowrap">{name}</p>
                            <p className="mb-0 ">{CONFIG.currencySymbol}{Utils.formatMoney(price)}</p>
                        </div>
                        <div>
                            <button className="btn btn-primary br-30 p-2" onClick={this.props.addToCart.bind(this, this.props.foodItem)}>
                                <i className="icn plus-white d-block" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(FoodItem);
