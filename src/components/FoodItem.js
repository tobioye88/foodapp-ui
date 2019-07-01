import React, { Component } from 'react';
import { CONFIG } from './Config';


class FoodItem extends Component {
  cardStyle = {
    imageStyle: {
      borderBottomRightRadius: '30px',
      borderBottomLeftRadius: '30px',
    }
  }

  render() {
    const { name, price, image } = this.props.foodItem;
    return (
      <div className={this.props.className}>
        <div className="card mb-3 shadow">
          <img className="card-img" src={image} alt="Food" style={this.cardStyle.imageStyle} />
          <div className="card-body d-flex">
            <div style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
              <p className="mb-0 small text-muted text-nowrap">{name}</p>
              <p className="mb-0 ">{CONFIG.currencySymbol}{CONFIG.formatMoney(price)}</p>
            </div>
          </div>
          <div className="card-footer text-right border-0 bg-white">
            <button className="btn btn-primary btn-sm" onClick={this.props.addToCart.bind(this, this.props.foodItem)}>+ Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodItem;
