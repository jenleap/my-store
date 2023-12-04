/* Receive a number and returns a string with $ and number formatted to two decimal places */
export const formatPrice = (price) => {
    return `$${ Number(price).toFixed(2)}`;
}

/* Create unique id based on product id & page number. */
export const formatProductIds = (products, page) => {
    return products.map(product => {
        return {
            ...product,
            id: `${product.id}-${page}`
        }
    });
}