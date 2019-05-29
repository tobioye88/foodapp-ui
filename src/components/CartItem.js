import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const {name, description, price, image} = this.props.item;
        return (
            <div className="row no-gutters mb-3 bg-light">
                <div className="col-3"><img className="img-fluid" src={image} alt=""/></div>

                <div  className="col-6">
                    <p className="mb-0">{name}</p>
                    <p className="mb-0"><small>{description}</small></p>
                </div>
                <div  className="col-3">
                    <div>
                        <button className="btn btn-outline-secondary btn-sm">+</button>
                        <span>{price}</span>
                        <button className="btn btn-outline-secondary btn-sm">-</button>
                    </div>
                    <div><button className="btn btn-link btn-danger btn-sm">X</button></div>
                </div>
            </div>
        );
    }
}

export default CartItem;
