import { useEffect, useState } from "react"
import { mockProductsApi } from "../utils/constants";
import styled from 'styled-components';
import ProductItem from "./partials/product-item.component";
import { Modal } from "./ui/modal.component";
import { Container } from "./ui/container.styled";
import { formatPrice } from "../utils/formatters";
import { BasicText, NumberText } from "./ui/text.styled";

export const ProductPage = () => {
    const [ products, setProducts ] = useState([]);
    const [ showProductModal, setShowProductModal ] = useState(false);
    const [ selectedProduct, setSelectedProduct ] = useState(undefined);
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
        console.log("HERE");
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
                    console.log("PAGE: ", page);
                    const formattedProducts = formatProductId(products);
                    setProducts(prevProducts => [...prevProducts, ...formattedProducts]);
                    setPage(prevPage => prevPage + 1);
                    setIsLoading(false);
                });
        } 
    }

    const formatProductId = (products) => {
        return products.map(product => {
            return {
                ...product,
                id: `${product.id}-${page}`
            }
        });
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
                {(products.length > 0) && (
                    <ProductGrid>
                        {products.map(product => (
                            <ProductGridItem key={ product.id } onClick={ () => openProductModal(product)}>
                                <ImageDiv  src={ product.image } alt={ product.title } />
                                <DetailsDiv>
                                    <BasicText>{product.title}</BasicText>
                                    <NumberText>{formatPrice(product.price)}</NumberText>
                                </DetailsDiv> 
                            </ProductGridItem>
                        ))}
                    </ProductGrid>
                )}
                {(products.length >= 100) && <BasicText style={{ padding: '20px 0'}}>END OF PAGE</BasicText>}
                <Modal 
                    showModal={ showProductModal }
                    closeModal={ closeProductModal }>
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
    transition: all 200ms ease-in-out;
    &:hover {
        cursor: pointer;
        box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    }  
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
