import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_ITEM
} from '../actions/cart.actions';

/* Initial state is an empty array which will contain products. */
/* Will return the updated state based on the action type without mutating original state. */
export const reducer = (state = [], action) => {
    switch(action.type) {
        /* Receives a product and returns original state with additional product */
        case ADD_TO_CART:
            return [
                ...state,
                action.payload.product
            ];
        /* Filters the state based on the product id it receives */
        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.payload.productId);
        /* Returns an empty array */
        case CLEAR_CART:
            return [];
        /* Maps through products in the state and updates the product that matches the product id. 
        Returns the updated array. */
        case UPDATE_ITEM:
            return state.map(product => {
                if (product.id === action.payload.productId) {
                    return {
                        ...product,
                        quantity: action.payload.quantity
                    }
                } else {
                    return product;
                }
            })
        default:
            return state;
    }
  };
  