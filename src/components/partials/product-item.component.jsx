import { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ProductItem = ({ product }) => {
    const [ quantity, setQuantity ] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity((currentQuantity) => currentQuantity - 1);
        }
    }

    return (
        <>
            <ImageDiv src={ product.image } alt={ product.title }></ImageDiv>
            <div>{ product.title }</div>
            <p>{product.description }</p>
            <div>{ product.price }</div>
            <span><RemoveIcon onClick={ decreaseQuantity }/></span>
            <span>{ quantity }</span>
            <span><AddIcon onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)} /></span>
            <button>Add to Cart</button>
        </>
    )
}

const ImageDiv = styled.img`
    width: 200px;
`;