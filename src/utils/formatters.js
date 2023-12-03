// Receive a number and returns a string with $ and number formatted to two decimal places
export const formatPrice = (price) => {
    return `$${ Number(price).toFixed(2)}`;
}

// Because we are calling the mockapi more than once, generate unique ids to be used as keys
export const formatProductIds = (products, page) => {
    return products.map(product => {
        return {
            ...product,
            id: `${product.id}-${page}`
        }
    });
}