import { createStore } from 'redux';
import {combineReducers} from 'redux';
import { reducer } from './reducers/cart.reducer';

// Code available if using multiple reducers
/* const allReducers = combineReducers({
    cart: reducer
}); */

// Creates the Redux store and registers the reducers
export const store = createStore(
  reducer
);

export default store;