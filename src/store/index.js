import { applyMiddleware, createStore } from 'redux';
import {combineReducers} from 'redux';
import { cartReducer } from './reducers/cart.reducer';
import { productsReducer } from './reducers/products.reducer';
import reduxThunk from 'redux-thunk';

/* Combine all reducers into a single reducer */
const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

/* Creates the Redux store and registers the root reducer */
export const store = createStore(
  rootReducer,
  /* Allows action creators to return functions & dispatch additional actions. */
  applyMiddleware(reduxThunk)
);

export default store;