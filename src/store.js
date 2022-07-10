import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer,productDetailsReducer, NewReviewReducer } from './reducers/ProductReducers';
import {authReducer} from './reducers/UserReducers'
import { cartReducer } from './reducers/cartReducer';
const reducer=combineReducers({
        products:productReducer,
        productDetails:productDetailsReducer,
        auth:authReducer,
        cart:cartReducer,
        newReview:NewReviewReducer
})

let initialState={
        cart: {
                cartItems: localStorage.getItem('cartItems')
                    ? JSON.parse(localStorage.getItem('cartItems'))
                    : [],
                shippingInfo:localStorage.getItem('shippingInfo')
                ? JSON.parse(localStorage.getItem('shippingInfo'))
                : {}
        }
}

const middleware=[thunk];
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;