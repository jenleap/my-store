import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

/* Simple X button positioned in the upper right corner of its parent with a click handler. */
export const RemoveButton = ({ handleClick }) => {
    return (
        <RemoveButtonWrapper onClick={ handleClick }>
            <CloseIcon />
        </RemoveButtonWrapper>
    )
}

const RemoveButtonWrapper = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 24px;
    height: 24px;
    padding: 0;
`;