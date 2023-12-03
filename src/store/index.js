import { applyMiddleware, createStore } from 'redux';
import {combineReducers} from 'redux';
import { cartReducer } from './reducers/cart.reducer';
import { productsReducer } from './reducers/products.reducer';
import reduxThunk from 'redux-thunk';


const allReducers = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

// Creates the Redux store and registers the reducers
export const store = createStore(
  allReducers,
  applyMiddleware(reduxThunk)
);

export default store;