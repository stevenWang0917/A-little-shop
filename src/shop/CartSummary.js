import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class CartSummary extends Component{
    getSummary = ()=>{
        const { cartItems, cartPrice } = this.props;
        if(cartItems > 0){
            return(
                <span>{cartItems} item(s), ${cartPrice.toFixed(2)}</span>
            )
        }
        else{
            return <span>Your cart: (empty) </span>
        }
    }

    getLinkClasses = ()=>{
        const { cartItems } = this.props;
        return `btn btn-sm bg-dark text-white ${cartItems === 0? "disabled":""}`
    }

    render(){
        return(
            <div className="float-right p-1">
                <small>
                    {this.getSummary()}
                    <Link className={ this.getLinkClasses() } to="/shop/cart"><i className="fa fa-shopping-cart"></i></Link>
                </small>
            </div>
        )
    }
}