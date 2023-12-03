import { useMemo, useState } from "react"
import { mockProductsApi } from "../utils/constants";

export const useFetchProducts = (page) => {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading] = useState(false);

    const getProducts = useMemo(() => () => {
        fetch(`${mockProductsApi}/products?limit=20`)
            .then(res => res.json())
            .then(products => {
                const formattedProducts = formatProductId(products);
                setProducts(prevProducts => [...prevProducts, ...formattedProducts]);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            });
      }, [page]);

      // Because we are calling the mockapi more than once, generate unique ids to be used as keys
    const formatProductId = (products) => {
        return products.map(product => {
            return {
                ...product,
                id: `${product.id}-${page}`
            }
        });
    }

    return {
        products,
        isLoading,
        getProducts
    };
}


