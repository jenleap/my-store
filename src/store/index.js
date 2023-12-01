import { createStore } from 'redux';
import {combineReducers} from 'redux';
import { reducer } from './reducers/cart.reducer';


/* const allReducers = combineReducers({
    cart: reducer
}); */

export const store = createStore(
  reducer
);

export default store;