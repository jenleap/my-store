import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Badge from '@mui/material/Badge';
import { RowContainer } from './ui/styles/container.styled';

const Header = ({ cart }) => {
    return (
        <HeaderContainer>
            <RowContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <TextWrapper>My Fabulous Store</TextWrapper>
            </Link>
            <Link to='/cart'>
                {(cart.length > 0) ? (
                        <IconWrapper>
                            <Badge badgeContent={ cart.length } color="primary">
                                <ShoppingCartIcon sx={{ color: 'white'}} />
                            </Badge>
                        </IconWrapper>
                        
                    ) : (
                        <IconWrapper>
                            <ShoppingCartIcon sx={{ color: 'white'}} />
                        </IconWrapper>
                )}
            </Link>
            </RowContainer>
        </HeaderContainer>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps, { })(Header);

const HeaderContainer = styled.header`
    background-color: black;  
    position: sticky;
    top: 0;
    z-index: 1;
`;

const TextWrapper = styled.h1`
    color: white;
    margin: 10px 0;
    font-size: 36px;
    font-family: 'Playfair Display', serif;
    @media (max-width: 480px) {
        font-size: 26px;
    }
`;

const IconWrapper = styled.div`
    margin-top: 25px;
    @media (max-width: 480px) {
        margin-top: 15px;
    }
`;