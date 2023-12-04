import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container } from "./ui/styles/container.styled";
import { BasicText } from "./ui/styles/text.styled";
import  ProductGridItem  from "./partials/product-grid-item.component";
import { getProducts } from "../store/actions/products.actions";

/* Page for displaying a list of products available for sale. */
const ProductPage = ({ products, getProducts }) => {
    /* Page number of items being retrieved from API. */
    const [page, setPage] = useState(1);
    /* Boolean value if all products have been retrieved from API. */
    const [ hasMoreProducts, setHasMoreProducts ] = useState(true);

    /* Function triggered by scroll event. */
    const handleScroll = () => {
        /* If window height + scroll position is greater than or equal to the height of the body content, 
        user has reached the end of the page. */
        const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        /* If user has reached the end of page & there are more products, update the page number. */
        if (endOfPage && hasMoreProducts) {
            setPage(prevPage => prevPage + 1);
        }
    };

    /* Checks if number of products has reached the max of 100 and calls API if max has not been reached. */
    const checkIfMoreProducts = () => {
        if (products.length >= 100) {
            setHasMoreProducts(false);
        } else {
            getProducts(page);
        }
    }

    /* Checks if there are more products to be retrieved when the page number is updated. */
    useEffect(() => {
        checkIfMoreProducts();
    }, [page]);

    /* Add the scroll event listener and removes when component unmounts. */
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

/* Maps the state from the Redux store to the component props */
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

/* Maps the action creators to the component props */
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (page) => dispatch(getProducts(page))
    }
}

/* Connects the component to the Redux store */
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


