import React, { Component } from 'react';
import CartItem from '../components/CartItem'

export default class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkedCard: true,
            checkedCash: false,
        }
    }


    render() {
        const { checkedCard, checkedCash } = this.state;
        return ((this.props.cartItems.length) ? this.showAllItems(checkedCard, checkedCash) : this.showEmptyScreen())
    }

    showEmptyScreen() {
        return (
            <div className="container mt-5" style={{ minHeight: "80vh" }}>
                <div className="jumbotron text-center text-muted">
                    <h2 className="display-4">Empty Cart</h2>
                    <p className="lead">Add an item to your cart</p>
                </div>
            </div>
        );
    }

    showAllItems(checkedCard, checkedCash) {
        return (
            <div className="container" style={{ minHeight: "80vh" }}>
                <h3 className="pt-3">Cart</h3>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {this.props.cartItems.map(el => <CartItem key={el.item.id} item={el} parent={this.props.parent} />)}
                        </div>
                    </div>
                    <div className="col-md-4 bg-grey mb-5" style={{ backgroundColor: "#fff2f2" }}>
                        <form>
                            <h4 className="text-uppercase mt-3">Delivery Information</h4>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <textarea className="form-control" id="address" name="address"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="instruction">Delivery Instruction</label>
                                <textarea className="form-control" id="instruction" name="instruction"></textarea>
                            </div>

                            <h4 className="text-uppercase mt-5">Payment Information</h4>

                            <div className="form-group">
                                <label htmlFor="promoCode">Promo Code</label>
                                <input className="form-control" id="promoCode" name="promoCode" placeholder="Promo Code"/>
                            </div>
                            <div className="btn-group btn-group-toggle mb-3" data-toggle="buttons">
                                <label className="btn btn-primary active">
                                    <input type="radio" name="paymentOption" id="option1" autoComplete="off" checked={checkedCard} />  Card
                                </label>
                                <label className="btn btn-primary">
                                    <input type="radio" name="paymentOption" id="option2" autoComplete="off" checked={checkedCash} /> Cash
                                </label>
                            </div>

                            <h4 className="text-uppercase mt-5">Summary</h4>

                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">Items</th>
                                        <td>{this.props.parent.state.itemsInCart}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">SubTotal</th>
                                        <td>{this.props.parent.state.subTotal}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Delivery</th>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tax</th>
                                        <td>10% 1000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Promo</th>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">TOTAL</th>
                                        <th scope="col">{this.props.parent.state.total}</th>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" disabled={true}>Check Out</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>);
    }
}
