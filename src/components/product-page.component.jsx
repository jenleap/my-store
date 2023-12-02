import { useEffect, useState } from "react"
import { mockProductsApi } from "../utils/constants";
import styled from 'styled-components';
import { Container } from "./ui/container.styled";
import { BasicText } from "./ui/text.styled";

import  ProductGridItem  from "./partials/product-grid-item.component";

export const ProductPage = () => {
    const [ products, setProducts ] = useState([]);
    const [ isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const handleScroll = () => {
        const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
        if (endOfPage && products.length < 100 && !isLoading) {
            console.log(products.length);
            getProducts();
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    const getProducts = () => {
        if (!isLoading) {
            setIsLoading(true);

            fetch(mockProductsApi)
                .then(res => res.json())
                .then(products => {
                    const formattedProducts = formatProductId(products);
                    setProducts(prevProducts => [...prevProducts, ...formattedProducts]);
                    setPage(prevPage => prevPage + 1);
                    setIsLoading(false);
                });
        } 
    }

    // Because we are calling the mockapi more than once, generate unique ids to be used as keys
    const formatProductId = (products) => {
        return products.map(product => {
            return {
                ...product,
                id: `${product.id}-${page}`
            }
        });
    }

    return (
        <PageBackground>
            <Container>
                {(products.length > 0) && (
                    <ProductGrid>
                        {products.map(product => (
                            <ProductGridItem 
                                key={ product.id } 
                                product={product} 
                            />
                        ))}
                    </ProductGrid>
                )}
                {(products.length >= 100) && <BasicText style={{ padding: '20px 0'}}>END OF PAGE</BasicText>}   
            </Container>
        </PageBackground>
    )
}

const PageBackground = styled.div`
    background-color: #f2f2f2;
;`

const ProductGrid = styled.div`
    padding-top: 50px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;
    grid-auto-flow: row;
    @media (max-width: 480px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;


