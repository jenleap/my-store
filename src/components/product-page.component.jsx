import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container } from "./ui/styles/container.styled";
import { BasicText } from "./ui/styles/text.styled";
import  ProductGridItem  from "./partials/product-grid-item.component";
import { getProducts } from "../store/actions/products.actions";

const ProductPage = ({ products, getProducts }) => {
    const [page, setPage] = useState(1);
    const [ hasMoreProducts, setHasMoreProducts ] = useState(true);

    const handleScroll = () => {
        const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        if (endOfPage && hasMoreProducts) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const checkIfMoreProducts = () => {
        if (products.length >= 100) {
            setHasMoreProducts(false);
        } else {
            getProducts(page);
        }
    }

    useEffect(() => {
        checkIfMoreProducts();
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                {!hasMoreProducts && <BasicText style={{ padding: '20px 0'}}>END OF PAGE</BasicText>}   
            </Container>
        </PageBackground>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (page) => dispatch(getProducts(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

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


