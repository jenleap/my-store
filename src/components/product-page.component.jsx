import { useEffect, useState } from "react"
import { mockProductsApi } from "../utils/constants";
import styled from 'styled-components';
import ProductItem from "./partials/product-item.component";
import { Modal } from "./ui/modal.component";
import { Container } from "./ui/container.styled";
import { formatPrice } from "../utils/formatters";

export const ProductPage = () => {
    const [ products, setProducts ] = useState([]);
    const [ showProductModal, setShowProductModal ] = useState(false);
    const [ selectedProduct, setSelectedProduct ] = useState(undefined);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetch(mockProductsApi)
            .then(res => res.json())
            .then(products => setProducts(products));
    }

    const openProductModal = (product) => {
        setShowProductModal(true);
        setSelectedProduct(product);
    }

    const closeProductModal = () => {
        setShowProductModal(false);
        setSelectedProduct(undefined);
    }

    return (
        <Container>
        {
            (products.length > 0) && (
                <ProductGrid>
                {
                    products.map(product => (
                        <ProductGridItem key={ product.id }>
                            <ImageDiv  src={ product.image } alt={ product.title } onClick={ () => openProductModal(product)}/>
                            <div>
                                <div>{product.title}</div>
                                <div>{formatPrice(product.price)}</div>
                            </div> 
                        </ProductGridItem>
                        
                    ))
                }
                </ProductGrid>
            )
        }
        <Modal 
            showModal={ showProductModal }
            closeModal={ closeProductModal }
        >
            <ProductItem product={ selectedProduct } onAdded={ closeProductModal }></ProductItem>
        </Modal>
        </Container>
    )
}

const ProductGrid = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;
    grid-auto-flow: row;
    @media (max-width: 480px) {
        grid-template-columns: auto auto;
    }
`;

const ProductGridItem = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-between;
    border: 1px solid lightgrey;
`;

const ImageDiv = styled.img`
   max-width: 150px;
   max-height: 150px;
   margin: auto;
`;
