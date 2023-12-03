import styled from 'styled-components';

export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 8px 20px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;

    &:active {
        transform: scale(0.98);
    }
`;

export const GhostButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
`;