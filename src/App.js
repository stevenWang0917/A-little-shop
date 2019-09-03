import React, { Component, lazy, Suspense } from 'react';
import { BuyforyouDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { ShopConnector } from './shop/ShopConnector';

import { AuthProviderImpl } from './auth/AuthProviderImpl';

const Admin = lazy(() => import('./admin/Admin'))

export default class App extends Component{
  render(){
    return(
      <Provider store={ BuyforyouDataStore }>
        <AuthProviderImpl>
          <Router>
            <Switch>
              <Route path="/shop" component={ShopConnector}/>
              <Route path="/admin" render={
                routeProps => 
                  <Suspense fallback={ <h3>Loading...</h3> }>
                    <Admin { ...routeProps }/>
                  </Suspense>
              }/>
              <Redirect to="/shop"/>
            </Switch>
          </Router>          
        </AuthProviderImpl>
      </Provider>
    )
  }
}