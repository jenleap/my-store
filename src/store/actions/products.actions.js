import { mockProductsApi } from "../../utils/constants";
import { formatProductIds } from "../../utils/formatters";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = (page) => dispatch => {
        fetch(`${mockProductsApi}/products?limit=20`)
            .then(res => res.json())
            .then(products => {
                const formattedProducts = formatProductIds(products, page);
                dispatch({
                    type: GET_PRODUCTS,
                    payload: {
                        products: formattedProducts
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });
}