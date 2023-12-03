import { useEffect, useState } from "react"
import { formatPrice } from '../../utils/formatters';
import { BasicText, NumberText, SubHeadingText } from '../ui/styles/text.styled';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Modal } from '../ui/modal.component';
import ProductItem from './product-item.component';
import { useNavigate } from "react-router-dom";

const ProductGridItem = ({ product, cart }) => {
    const [ showProductModal, setShowProductModal ] = useState(false);
    const [ isInCart, setIsInCart ] = useState(false);

    const navigate = useNavigate();

    const checkIsInCart = () => {
        const itemsInCart = cart.filter(item => item.id === product.id);
        return itemsInCart.length > 0;
    }

    useEffect(() => {
        setIsInCart(checkIsInCart());
    }, [cart]);

    const openProductModal = (product) => {
        if (isInCart) {
            navigate('/cart');
        } else {
            setShowProductModal(true);
        }
    }

    const closeProductModal = () => {
        setShowProductModal(false);
    }

    return (
        <>
        <ProductItemContainer onClick={ () => openProductModal(product)}>
            <ImageDiv  src={ product.image } alt={ product.title } />
            <DetailsDiv>
                <BasicText>{product.title}</BasicText>
                <NumberText>{formatPrice(product.price)}</NumberText>
            </DetailsDiv> 
            { isInCart && <ProductOverlay>
                <SubHeadingText style={{ margin: '50px 15px 0 15px'}}>This item has already been added to your cart.</SubHeadingText>
            </ProductOverlay>}
        </ProductItemContainer>
        <Modal 
            showModal={ showProductModal }
            closeModal={ closeProductModal }>
            <ProductItem product={ product } onAdded={ closeProductModal }></ProductItem>
        </Modal>
        </>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps, { })(ProductGridItem);


const ProductItemContainer = styled.div`
    position: relative;
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

const ProductOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: black;
    color: white;
    text-align: center;
    &:hover {
        opacity: 1;
    }
`;

const ImageDiv = styled.img`
   max-width: 150px;
   max-height: 150px;
   margin: 10px auto 20px auto;
   @media (max-width: 480px) {
        width: 80%;
    }
`;

const DetailsDiv = styled.div`
    min-height: 110px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;