import { GET_PRODUCTS } from '../actions/products.actions';

/* Redux state for products */
/* Initial state is an empty array of products. */
/* Will return the updated state based on the action type without mutating original state. */
export const productsReducer = (state = [], action) => {
    switch(action.type) {
        /* Receives an arrays of products and returns original state with additional products */
        case GET_PRODUCTS:
            return [
                ...state,
                ...action.payload.products
            ];
        default:
            return state;
    }
  };