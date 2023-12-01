import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_ITEM
} from '../actions/cart.actions';


export const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload.product
            ];
        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.payload.productId);
        case CLEAR_CART:
            return [];
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
  