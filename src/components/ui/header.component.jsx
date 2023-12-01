import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
                <TextWrapper>My Fabulous Store</TextWrapper>
            </Link>
            <Link to='/cart'>
                <TextWrapper>
                    <ShoppingCartIcon />
                </TextWrapper>
            </Link>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    background-color: black;
    justify-content: space-between;
    padding: 0 30px;
`;

const TextWrapper = styled.h1`
    color: white;
    font-size: 20px;
`;