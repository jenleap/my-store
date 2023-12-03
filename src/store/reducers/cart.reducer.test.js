import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_ITEM } from "../actions/cart.actions";
import { cartReducer } from "./cart.reducer";

const MockDataProductOne = {
    id:1,
    title:'Product 1',
    price:'10',
    category:'Fancy Products',
    description:'This product is amazing.',
    image:'dummy.jpg',
    quantity: 2
};

const MockDataProductOneUpdated = {
    id:1,
    title:'Product 1',
    price:'10',
    category:'Fancy Products',
    description:'This product is amazing.',
    image:'dummy.jpg',
    quantity: 3
};

const MockDataProductTwo = {
    id:2,
    title:'Product 2',
    price:'5.5',
    category:'Fancy Products',
    description:'This product is more amazing.',
    image:'dummy2.jpg',
    quantity: 1
};

const MockDataCartSingleProduct = [
    MockDataProductOne
];

const MockDataCartDoubleProduct = [
    MockDataProductOne,
    MockDataProductTwo
];

const MockDataCartDoubleProductUpdated = [
    MockDataProductOneUpdated,
    MockDataProductTwo
];

describe('cart reducer', () => {
    it('should return the initial state', () => {
        expect(cartReducer(undefined, [])).toEqual([]);
    });

    it('should handle ADD_TO_CART', () => {
        const addAction = {
            type: ADD_TO_CART,
            payload: {
                product: MockDataProductOne
            }
        };
        expect(cartReducer([], addAction)).toEqual(MockDataCartSingleProduct);
    });

    it('should handle REMOVE_FROM_CART', () => {
        const removeAction = {
            type: REMOVE_FROM_CART,
            payload: {
                productId: MockDataProductTwo.id
            }
        };
        expect(cartReducer(MockDataCartDoubleProduct, removeAction)).toEqual(MockDataCartSingleProduct);
    });

    it('should handle CLEAR_CART', () => {
        const clearAction = {
            type: CLEAR_CART
        };
        expect(cartReducer(MockDataCartDoubleProduct, clearAction)).toEqual([]);
    });

    it('should handle UPDATE_ITEM', () => {
        const updateAction = {
            type: UPDATE_ITEM,
            payload: {
                productId: 1,
                quantity: 3
            }
        };
        expect(cartReducer(MockDataCartDoubleProduct, updateAction)).toEqual(MockDataCartDoubleProductUpdated);
    });
  });