import { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { connect } from 'react-redux';
import { removeFromCart, updateItem } from '../../store/actions/cart.actions';
import { SplitDiv } from '../ui/split-div.styled';
import { formatPrice } from '../../utils/formatters';
import { RemoveButton } from '../ui/remove-button.styled';

const CartItem = ({ product, removeFromCart, updateItem }) => {
    const [ quantity, setQuantity ] = useState(1);

    const updateQuantity = (amount) => {
        const newQuantity = product.quantity + amount;
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
                <div>{ product.title }</div>
                <div>{ formatPrice(product.price) }</div>
                <span><RemoveIcon onClick={ () => updateQuantity(-1) }/></span>
                <span>{ product.quantity }</span>
                <span><AddIcon onClick={() => updateQuantity(1)} /></span>
                <span>{ formatPrice(calculateTotal()) }</span>
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
    margin: 15px;
    position: relative;
`;

const ImageDiv = styled.img`
    width: 100px;
`;