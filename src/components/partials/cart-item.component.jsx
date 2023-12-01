import { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeFromCart, updateItem } from '../../store/actions/cart.actions';
import { SplitDiv } from '../ui/split-div.styled';
import { formatPrice } from '../../utils/formatters';
import { RemoveButton } from '../ui/remove-button.styled';
import { IncrementDecrement } from '../ui/increment-decrement.component';
import { BasicText, SubHeadingText, NumberText } from '../ui/text.styled';
import { Row } from '../ui/container.styled';

const CartItem = ({ product, removeFromCart, updateItem }) => {

    const updateQuantity = (newQuantity) => {
        if (newQuantity > 0) {
            updateItem(product.id, newQuantity);
        } else if (newQuantity === 0) {
            removeFromCart(product.id);
        }
    }

    const calculateTotal = () => {
        return product.quantity * product.price;
    }

    return (
        <ItemWrapper>
            <RemoveButton handleClick={() => removeFromCart(product.id)} />
        <SplitDiv leftWeight={1} rightWeight={3}>
            <>
                <ImageDiv src={ product.image } alt={ product.title }></ImageDiv>
            </>
            <>
                <SubHeadingText>{ product.title }</SubHeadingText>
                <NumberText>Price: { formatPrice(product.price) }</NumberText>
                <QuantityWrapper>
                    <IncrementDecrement quantity={ product.quantity } handleQuantityUpdate={ updateQuantity } />
                    <NumberText>{ formatPrice(calculateTotal()) }</NumberText>
                </QuantityWrapper>
                
            </>
        </SplitDiv>
        </ItemWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: product => dispatch(removeFromCart(product)),
        updateItem: (productId, quantity) => dispatch(updateItem(productId, quantity))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);

const ItemWrapper = styled.div`
    border: 1px solid lightgrey;
    padding: 15px;
    margin: 15px 0;
    position: relative;
`;

const ImageDiv = styled.img`
    width: 100px;
`;

const QuantityWrapper = styled.div`
    display: flex;
    margin-top: 30px;
`;