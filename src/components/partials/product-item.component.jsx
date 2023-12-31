import { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cart.actions';
import { SplitDiv } from '../ui/split-div.component';
import { formatPrice } from '../../utils/formatters';
import { Button } from '../ui/styles/button.styled';
import { IncrementDecrement } from '../ui/increment-decrement.component';
import { BasicText, HeadingText, NumberText } from '../ui/styles/text.styled';

const ProductItem = ({ product, onAdded, addToCart }) => {
    const [ quantity, setQuantity ] = useState(1);

    /* When user clicks Add to Cart, addToCart action creator is called & parent component
    is notified so that modal may be closed. */
    const onAddToCart = () => {
        /* User cannot add to cart if quantity is 0. */
        if (quantity > 0) {
            addToCart({...product, quantity});
            onAdded();
        }
    }

    return (
        <SplitDiv leftWeight={1} rightWeight={2}>
            <ImageDiv src={ product.image } alt={ product.title }></ImageDiv>
            <DetailsDiv>
                <HeadingText>{ product.title }</HeadingText>
                <BasicText>{product.description }</BasicText>
                <NumberText>{ formatPrice(product.price) }</NumberText>
                <IncrementDecrement quantity={ quantity} handleQuantityUpdate={setQuantity} />
                <Button onClick={ onAddToCart }>Add to Cart</Button>
            </DetailsDiv>
        </SplitDiv>
    )
}

/* Maps the action creators to the component props */
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: product => dispatch(addToCart(product))
    }
}

/* Connects the component to the Redux store */
export default connect(null, mapDispatchToProps)(ProductItem);

const DetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ImageDiv = styled.img`
    width: 200px;
    @media (max-width: 480px) {
        margin-top: 20px;
        width: 100%;
    }
`;