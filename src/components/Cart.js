import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    // Add Items
    // Increase Item count
    // Decrease Item count
    // Remove Items
    // Sow total 
    // check out

    state = {
        isOpen: false,
        count: 0
    }

    toggle = ()=>{
        console.log("cart toggled: Opened? " + this.state.isOpen);
        this.setState({isOpen: !this.state.isOpen});
    }

    getCartStyle = () => {
        return {
            bottom: 0,
            top: this.state.isOpen? 0 : 'auto',
            zIndex: 9000
        }
    }


    render() {
        return (
            <div className="position-fixed p-3  bg-white w-100" style={this.getCartStyle()} >
                <div className="d-flex">    
                    <span className="self-align-center">Cart {this.props.cartItems.length || 0}</span>
                    <button className="btn btn-primary ml-auto" onClick={this.toggle}>{this.state.isOpen? "Close Cart": "Open Cart"}</button>
                </div>
                <div hidden={!this.state.isOpen} className="p-3">
                    {this.val = this.props.cartItems.map(
                        (item, i)=> {
                            return <CartItem key={i} item={item}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Cart;
