import { useEffect, useState, useCallback } from "react"
import styled from 'styled-components';
import { Container } from "./ui/styles/container.styled";
import { BasicText } from "./ui/styles/text.styled";

import  ProductGridItem  from "./partials/product-grid-item.component";
import { useFetchProducts } from "../hooks/useFetchProducts";

export const ProductPage = () => {
    const [page, setPage] = useState(1);
    const { products, getProducts } = useFetchProducts(page);

    const handleScroll = useCallback(() => {
        const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        if (endOfPage && products.length < 100) {
            setPage(prevPage => prevPage + 1);
        }
    }, [products.length]);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

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


