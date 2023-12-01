import { useEffect, useState } from "react"
import { mockProductsApi } from "../utils/constants";
import styled from 'styled-components';
import ProductItem from "./partials/product-item.component";
import { Modal } from "./ui/modal.component";
import { Container } from "./ui/container.styled";
import { formatPrice } from "../utils/formatters";
import { BasicText, NumberText, SubHeadingText } from "./ui/text.styled";

export const ProductPage = () => {
    const [ products, setProducts ] = useState([]);
    const [ showProductModal, setShowProductModal ] = useState(false);
    const [ selectedProduct, setSelectedProduct ] = useState(undefined);
    const [page, setPage] = useState(1);

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
        <PageBackground>
        <Container>
        {
            (products.length > 0) && (
                <ProductGrid>
                {
                    products.map(product => (
                        <ProductGridItem key={ product.id } onClick={ () => openProductModal(product)}>
                            <ImageDiv  src={ product.image } alt={ product.title } />
                            <DetailsDiv>
                                <BasicText>{product.title}</BasicText>
                                <NumberText>{formatPrice(product.price)}</NumberText>
                            </DetailsDiv> 
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
        grid-template-columns: auto auto;
    }
`;

const ProductGridItem = styled.div`
    background-color: white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-between;
    border: 1px solid lightgrey;
`;

const ImageDiv = styled.img`
   max-width: 150px;
   max-height: 150px;
   margin: 10px auto 20px auto;
`;

const DetailsDiv = styled.div`
    min-height: 110px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
