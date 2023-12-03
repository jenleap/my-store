import { mockProductsApi } from "../../utils/constants";
import { formatProductIds } from "../../utils/formatters";

export const GET_PRODUCTS = "GET_PRODUCTS";

/* Here mock api is only returning 20 products. In a real world scenario, would calculate 
skip/offset (page * limit) & use limit & skip variables to query api with pagination. */
export const getProducts = (page) => dispatch => {
    const limit = 20;
    fetch(`${mockProductsApi}/products?limit=${limit}`)
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
};