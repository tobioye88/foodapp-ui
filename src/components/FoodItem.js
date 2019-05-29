import React, { Component } from 'react';


class FoodItem extends Component {
  render() {
    const { name, price, description } = this.props.foodItem;
    return (
      <div className={this.props.className}>
        <div className="card mb-3 shadow">
          <img className="card-img" src="/imgs/foodimage.jpg" alt="Food" />
            <div className="card-body d-flex">
              <div style={{maxWidth: '65%', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                <p className="mb-0 text-nowrap">{name}</p>
                <p className="mb-0 small text-muted">{description}</p>
              </div>
              <div className="ml-auto" style={{fontSize: '170%'}}>
                <p className="card-text mb-0 text-right">${price}</p>
              </div>
            </div>
            <div className="card-footer text-right">
              <button className="btn btn-primary btn-sm" onClick={this.props.addToCart.bind(this, this.props.foodItem)}>+ Add To Cart</button>
            </div>
        </div>
      </div>
    );
  }
}

export default FoodItem;
