import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Badge from '@mui/material/Badge';
import { RowContainer } from './ui/container.styled';

const Header = ({ cart }) => {
    return (
        <HeaderContainer>
            <RowContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <TextWrapper>My Fabulous Store</TextWrapper>
            </Link>
            <Link to='/cart'>
                {(cart.length > 0) ? (
                        <Badge sx={{ marginTop: '25px'}} badgeContent={ cart.length } color="primary">
                            <ShoppingCartIcon sx={{ color: 'white'}} />
                        </Badge>
                    ) : (
                        <ShoppingCartIcon sx={{ color: 'white', marginTop: '25px'}} />
                )}
            </Link>
            </RowContainer>
        </HeaderContainer>
    )
}

function mapStateToProps(state) {
    return {
        cart: state
    };
}

export default connect(mapStateToProps, { })(Header);

const HeaderContainer = styled.header`
    background-color: black;  
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