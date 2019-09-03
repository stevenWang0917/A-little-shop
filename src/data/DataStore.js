import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { asyncActions } from './ AsyncMiddleware'

import { ShopReducer } from './ShopReducer';
import { CartReducer } from './CartReducer';
import { CommonReducer } from './CommonReducer'

export const BuyforyouDataStore = createStore(
    CommonReducer(ShopReducer,CartReducer), 
    composeWithDevTools(applyMiddleware(asyncActions))
);