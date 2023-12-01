import { useEffect, useState } from "react"
import { mockProductsApi } from "../utils/constants";
import styled from 'styled-components';
import { ProductItem } from "./partials/product-item.component";
import { Modal } from "./ui/modal.component";


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
        <>
        {
            (products.length > 0) && (
                <ProductGrid>
                {
                    products.map(product => (
                        <ImageDiv key={ product.id } src={ product.image } alt={ product.title } onClick={ () => openProductModal(product)}/>
                    ))
                }
                </ProductGrid>
            )
        }
        <Modal 
            showModal={ showProductModal }
            closeModal={ closeProductModal }
        >
            <ProductItem product={ selectedProduct }></ProductItem>
        </Modal>
        </>
    )
}

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;
    grid-auto-flow: row;
`;

const ImageDiv = styled.img`
    width: 20%;
`;
