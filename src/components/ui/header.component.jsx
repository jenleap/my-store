import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <Link to="/">
                <h1>My Fabulous Store</h1>
            </Link>
            <Link to='/cart'>
                <ShoppingCartIcon />
            </Link>
        </>
    )
}