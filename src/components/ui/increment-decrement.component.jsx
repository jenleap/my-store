import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';

/* A component with + and - minus that updates a shown amount and returns the new amount on click */
export const IncrementDecrement = ({quantity, handleQuantityUpdate}) => {

    /* Triggered on + or - click. Calculates a new quantity and calls handleQuantityUpdate with this new value. */
    const updateQuantity = (amount) => {
        const newQuantity = quantity + amount;
        if (newQuantity >= 0) {
            handleQuantityUpdate(newQuantity);
        }
    }

    return (
        <Wrapper>
            <RemoveIcon sx={{ verticalAlign: 'text-top', marginRight: '8px'}} onClick={ () => updateQuantity(-1) }/>
                <span>{ quantity }</span>
            <AddIcon sx={{ verticalAlign: 'text-top', marginLeft: '8px'}} onClick={() => updateQuantity(1)} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-right: 60px;
`;