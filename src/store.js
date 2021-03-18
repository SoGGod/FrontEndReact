import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {productReducers,productDetailsReducer} from './Reducers/productReducers'

const reducer = combineReducers({
    products:productReducers,
    productDetails:productDetailsReducer
})

let initialState = {}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
