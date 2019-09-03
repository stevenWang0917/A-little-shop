import React, { Component } from 'react';

import { ProductList } from './ProductList';
import { CategoryNavigation } from './CategoryNavigation';
import { CartSummary } from './CartSummary';

import { ProductPageConnector } from './ProductPageConnector';
import { PaginationControls } from '../PaginationControls'

const ProductPages = ProductPageConnector(PaginationControls);

export class Shop extends Component{
    handleAddToCart = (...args) => {
        this.props.addToCart(...args);
        this.props.history.push("/shop/cart");
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-info text-white">
                        <div className="navbar-brand">Steven's Shop</div>
                        <CartSummary { ...this.props } />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-2 mt-2 p-2 pb-0 bg-light">
                        <CategoryNavigation baseURL="/shop/products" 
                            categories={this.props.categories}/>
                    </div>
                    <div className="col p-2 mt-2">
                        <ProductList products={this.props.products}
                            addToCart={this.handleAddToCart}/>
                        <ProductPages/>
                    </div>
                </div>
            </div>
        )
    }
}