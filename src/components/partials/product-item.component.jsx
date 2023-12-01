import { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cart.actions';
import { SplitDiv } from '../ui/split-div.styled';
import { formatPrice } from '../../utils/formatters';
import { Button } from '../ui/button.styled';
import { IncrementDecrement } from '../ui/increment-decrement.component';

const ProductItem = ({ product, onAdded, addToCart }) => {
    const [ quantity, setQuantity ] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity((currentQuantity) => currentQuantity - 1);
        }
    }

    const onAddToCart = () => {
        addToCart({...product, quantity});
        onAdded();
    }

    return (
        <SplitDiv leftWeight={1} rightWeight={2}>
            <>
                <ImageDiv src={ product.image } alt={ product.title }></ImageDiv>
            </>
            <>
                <div>{ product.title }</div>
                <p>{product.description }</p>
                <div>{ formatPrice(product.price) }</div>
                <IncrementDecrement quantity={ quantity} handleQuantityUpdate={setQuantity} />
                <Button onClick={ onAddToCart }>Add to Cart</Button>
            </>
            
            
        </SplitDiv>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: product => dispatch(addToCart(product))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);

const ItemDiv = styled.div`
    display: flex;
`;

const ImageDiv = styled.img`
    width: 200px;
`;