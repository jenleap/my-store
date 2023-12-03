// Receive a number and returns a string with $ and number formatted to two decimal places
export const formatPrice = (price) => {
    return `$${ Number(price).toFixed(2)}`;
}