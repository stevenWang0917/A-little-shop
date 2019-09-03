import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartDetailsRows } from "./CartDetailsRows";

export class CartDetails extends Component {
    getLinkClasses = ()=>{
        const { cartItems } = this.props;
        return `btn btn-secondary m-1 ${cartItems === 0? "disabled":""}`
    }

    render(){
        const { cart, cartPrice, updateCartQuantity, removeFromCart } = this.props;
        return(
            <div className="container-fluid">
                <div className="m-3">
                    <h2 className="text-center">Your Cart</h2>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Quantity</th>
                                <th>Product</th>
                                <th className="text-right">Price</th>
                                <th className="text-right">Subtotal</th>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            <CartDetailsRows 
                                cart={cart} 
                                cartPrice={cartPrice} 
                                updateQuantity={updateCartQuantity}
                                removeFromCart={removeFromCart}/>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <Link className="btn btn-primary m-1" to="/shop">Continue Shopping</Link>
                        <Link className={this.getLinkClasses()} to="/shop/checkout">Checkout</Link>
                    </div>
                </div>
            </div>
        )
    }
}

/* // Uåsing react-table
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export class CartDetails extends Component {
    getLinkClasses = ()=>{
        const { cartItems } = this.props;
        return `btn btn-secondary m-1 ${cartItems === 0? "disabled":""}`
    }

    render(){
        const { cart, cartPrice, updateCartQuantity, removeFromCart } = this.props;
        
        const columns = [
            { 
                id: "Quentity",
                Header: "Quantity", 
                accessor: (cart)=> 
                    <input type="number" value={cart.quantity} min={0}
                        onChange={(e)=>updateCartQuantity(cart.product, e.target.value)}/>
            },
            { 
                id: "Product", 
                Header: "Product", 
                accessor: (cart)=>cart.product.name
            },
            { 
                id: "Price", 
                Header: "Price", 
                accessor: (cart)=>cart.product.price.toFixed(2),
                Footer: `Total:`
            },
            { 
                id: "Subtotal", 
                Header: "Subtotal", 
                accessor: (cart)=>(cart.quantity * cart.product.price).toFixed(2),
                Footer: (+cartPrice).toFixed(2)
            },
            { 
                id: "Remove", 
                Header: "",
                accessor: (cart)=>
                <button className="btn btn-sm btn-danger"
                    onClick={()=>removeFromCart(cart.product)}>
                    Remove
                </button>
            }
        ]

        let cartLength = cart? cart.length : 0;

        return(
            <div className="container">
                <h2 className="text-center">Your Cart</h2>
                { cartLength === 0? <h4 className="text-center">Your cart is empty</h4> :
                <ReactTable 
                    className="-striped"
                    data={cart}
                    columns={columns}
                    pageSize={cartLength}
                    showPagination={false}
                />}
                <div className="text-center mt-5">
                    <Link className="btn btn-primary m-1" to="/shop">Continue Shopping</Link>
                    <Link className={this.getLinkClasses()} to="/shop/checkout">Checkout</Link>
                </div>
            </div>
        )
    }
} */