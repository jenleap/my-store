export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_ITEM = "UPDATE_ITEM";

/* This file contains the types & functions for dispatching actions to the store */

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: {
        product
    }
});

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: {
        productId
    }
});

export const clearCart = () => ({
    type: CLEAR_CART
});

export const updateItem = (productId, quantity) => ({
    type: UPDATE_ITEM,
    payload: {
        productId,
        quantity
    }
})