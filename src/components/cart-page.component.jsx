import { connect } from 'react-redux';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import { clearCart } from '../store/actions/cart.actions';
import { Container, Row } from './ui/styles/container.styled';
import { SplitDiv } from './ui/split-div.component';
import CartItem from './partials/cart-item.component';
import { formatPrice } from '../utils/formatters';
import { Button, GhostButton } from './ui/styles/button.styled';
import { BasicText, HeadingText, NumberText } from './ui/styles/text.styled';

/* Page for displaying a summary of the items a customer has added to their shopping cart. */
const CartPage = ({ cart, clearCart}) => {
    /* Calculates the total cost of all products in cart based on their selected quantities. */
    const getSubtotal = () => {
        return cart.reduce((total, product) => {
            return total + (product.quantity * product.price);
        }, 0);
    }

    return (
        <Container>
            <SplitDiv leftWeight={2} rightWeight={1}>
                <>
                    {(cart.length < 1) ? (
                        <HeadingText style={{ margin: '30px'}}>Your cart is empty.</HeadingText>
                    ) : (
                        <>
                         <Row style={{ marginTop: '15px'}}>
                            <HeadingText>Your Cart</HeadingText>   
                            <GhostButton onClick={ clearCart }>Clear</GhostButton>
                        </Row>
                        { cart.map(product => (
                            <CartItem key={ product.id } product={ product }/>
                        ))}
                        </>
                    )
                    }
                </>
                <SummaryDiv>  
                    <HeadingText>Order Summary</HeadingText>
                    <Divider sx={{ margin: '10px 0'}}/>
                    <Row>
                        <BasicText>Subtotal</BasicText>
                        <NumberText>{ formatPrice(getSubtotal())}</NumberText>
                    </Row>
                    <Row>
                        <BasicText>Shipping</BasicText>
                        <BasicText>TBD</BasicText>
                    </Row>
                    <Row>
                        <BasicText>Taxes</BasicText>
                        <BasicText>TBD</BasicText>
                    </Row>
                    <Row style={{ fontWeight: 'bold', marginBottom: '20px'}}>
                        <BasicText>Total</BasicText>
                        <NumberText>{ formatPrice(getSubtotal())}</NumberText>
                    </Row>
                    <Button>Checkout</Button>
                </SummaryDiv>
            </SplitDiv>
        </Container>
    )
};

const SummaryDiv = styled.div`
    background-color: lightgrey;
    margin: 15px;
    padding: 15px;
`;

/* Maps the state from the Redux store to the component props */
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

/* Maps the action creators to the component props */
const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart())
    }
}

/* Connects the component to the Redux store */
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);