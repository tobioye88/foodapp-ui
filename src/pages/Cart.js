import React, { Component } from 'react';
import FoodItem from '../components/FoodItem';
import Header from '../components/Header';

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
        return (
            <>
                <Header />
                {(this.props.cartItems.length) ? this.showAllItems(checkedCard, checkedCash) : this.showEmptyScreen()}
            </>);
    }

    showEmptyScreen() {
        return (
            <div className="container">
                <div className="jumbotron text-center text-muted" style={{ borderRadius: '30px' }}>
                    <h2 className="display-4">Empty Cart</h2>
                    <hr style={{ width: '30%' }} />
                    <p className="lead">Add an item to your cart</p>
                </div>
            </div>
        );
    }

    showAllItems(checkedCard, checkedCash) {
        return (

            <div className="container">
                <h3 className="pt-3">Cart</h3>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {this.props.cartItems.map(el => <FoodItem
                                key={el.id}
                                foodItem={el}
                                parent={this.props.parent}
                                className="col-md-4 mb-3"
                                isCart={true} />)}
                        </div>
                    </div>
                    <div className="col-md-4 bg-grey mb-5" style={{ backgroundColor: "#fff2f2", borderRadius: '30px' }}>
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
                                <input className="form-control" id="promoCode" name="promoCode" placeholder="Promo Code" />
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
                                        <td>{this.props.parent.state.subTotal * 0.1} <small className="text-muted">10% {this.props.parent.state.subTotal}</small></td>
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
                                <button className="btn btn-primary btn-block btn-rounded" disabled={true}>Check Out</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}
