import { connect } from 'react-redux';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import { clearCart } from '../store/actions/cart.actions';
import { Container, Row } from './ui/container.styled';
import { SplitDiv } from './ui/split-div.styled';
import CartItem from './partials/cart-item.component';
import { formatPrice } from '../utils/formatters';

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
                        <h2>Your cart is empty.</h2>
                    ) : (
                        <>
                         <Row>
                            <span>Your Cart</span>   
                            <button onClick={ clearCart }>Clear</button>
                        </Row>
                        { cart.map(product => (
                            <CartItem key={ product.id } product={ product }/>
                        ))}
                        </>
                    )
                    }
                </>
                <SummaryDiv>  
                    <h3>Order Summary</h3>
                    <Divider />
                    <Row>
                        <span>Subtotal</span>
                        <span>{ formatPrice(getSubtotal())}</span>
                    </Row>
                    <Row>
                        <span>Shipping</span>
                        <span>TBD</span>
                    </Row>
                    <Row>
                        <span>Taxes</span>
                        <span>TBD</span>
                    </Row>
                    <Row>
                        <span>Total</span>
                        <span>{ formatPrice(getSubtotal())}</span>
                    </Row>
                    <button>Checkout</button>
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
        cart: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);