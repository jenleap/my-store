import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeFromCart, updateItem } from '../../store/actions/cart.actions';
import { SplitDiv } from '../ui/split-div.component';
import { formatPrice } from '../../utils/formatters';
import { RemoveButton } from '../ui/remove-button.component';
import { IncrementDecrement } from '../ui/increment-decrement.component';
import { SubHeadingText, NumberText, BasicText } from '../ui/styles/text.styled';

/* Component for displaying a single product with selected quantity in the cart. */
const CartItem = ({ product, removeFromCart, updateItem }) => {
    /* Updates the selected quantity for the product and removes from cart if the user selects 0. */
    const updateQuantity = (newQuantity) => {
        if (newQuantity > 0) {
            updateItem(product.id, newQuantity);
        } else if (newQuantity === 0) {
            removeFromCart(product.id);
        }
    }

    /* Calculates the total amount of the product given a selected quantity. */
    const calculateTotal = () => {
        return product.quantity * product.price;
    }

    return (
        <ItemWrapper>
            <RemoveButton handleClick={() => removeFromCart(product.id)} />
            <SplitDiv leftWeight={1} rightWeight={3}>
                <ImageDiv src={ product.image } alt={ product.title }></ImageDiv>
                <>
                    <SubHeadingText>{ product.title }</SubHeadingText>
                    <BasicText>SKU: { product.id }</BasicText>
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

/* Maps the action creators to the component props */
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: product => dispatch(removeFromCart(product)),
        updateItem: (productId, quantity) => dispatch(updateItem(productId, quantity))
    }
}

/* Connects the component to the Redux store */
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