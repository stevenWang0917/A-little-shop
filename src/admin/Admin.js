import React, { Component } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { GraphQlUrl } from "../data/Urls";
import { OrdersConnector } from "./OrdersConnector";

import { Route, Redirect, Switch } from "react-router-dom";
import { ToggleLink } from "../shop/ToggleLink";
import { ConnectedProducts } from "./ProductsConnector";
import { ProductEditor } from "./ProductEditor";
import { ProductCreator } from "./ProductCreator";

import { AuthPrompt } from "../auth/AuthPrompt";
import { authWrapper } from "../auth/AuthWrapper";

/* const grapQlClient = new ApolloClient({ uri: GraphQlUrl }); */

export default authWrapper( class extends Component {
    constructor(props){
        super(props);
        this.state={ click: false }
        this.client = new ApolloClient({
            uri: GraphQlUrl,
            request: gqloperation => gqloperation.setContext({
                headers: { Authorization: `Bearer<${this.props.webToken}>`}
            })
        })
    }

    render = () =>
        <ApolloProvider client={ this.client }>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-info text-white">
                        <div className="navbar-brand">Steven's Shop</div>
                    </div>
                </div>
                <div className="row">                    
                    <div className="col-12 col-md-2 p-2">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light m-0 p-0">
                            <button className="navbar-toggler" type="button" onClick={(e)=> this.setState((state)=>({click: !state.click}))}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse ${this.state.click? "show":""}`}>
                                <ul className="navbar-nav flex-md-column w-100  justify-content-between">
                                    <li className="nav-item">
                                        <ToggleLink to="/admin/products">Products</ToggleLink>
                                    </li>                                    
                                    <li className="nav-item">
                                        <ToggleLink to="/admin/orders">Orders</ToggleLink>
                                    </li><br/>
                                    {
                                        !this.props.isAuthenticated &&  
                                        <li className="nav-item mr-3">
                                            <ToggleLink to="/shop" 
                                                className="nav-link btn btn-block btn-success m-2">
                                                    Go Back to Shop
                                            </ToggleLink>
                                        </li>
                                    }
                                    {
                                        this.props.isAuthenticated &&
                                        <li className="nav-item mr-3">                                                            
                                            <button 
                                                className="btn btn-block btn-success m-2"
                                                onClick={ this.props.signout }>
                                                    Log Out
                                            </button>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col p-2">
                        <Switch>
                            {
                                !this.props.isAuthenticated &&
                                <Route component={ AuthPrompt }/>
                            }
                            <Route path="/admin/orders" component={OrdersConnector}/>
                            <Route path="/admin/products/create" component={ProductCreator}/>
                            <Route path="/admin/products/:id" component={ProductEditor}/>
                            <Route path="/admin/products/" component={ConnectedProducts}/>
                            <Redirect to="/admin/products"/>
                        </Switch>
                    </div>
                </div>
            </div>
        </ApolloProvider>
})