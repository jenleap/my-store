import { connect } from 'react-redux';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import { clearCart } from '../store/actions/cart.actions';
import { Container, Row } from './ui/styles/container.styled';
import { SplitDiv } from './ui/split-div.component';
import CartItem from './partials/cart-item.component';
import { formatPrice } from '../utils/formatters';
import { Button, GhostButton } from './ui/styles/button.styled';
import { BasicText, HeadingText, NumberText, SubHeadingText } from './ui/styles/text.styled';

const CartPage = ({ cart, clearCart}) => {

    const getSubtotal = () => {
        return cart.reduce((total, product) => {
            console.log(total, product);
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

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);