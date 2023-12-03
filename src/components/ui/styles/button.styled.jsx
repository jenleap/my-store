import styled from 'styled-components';

export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 8px 20px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;

    &:focus {
        transform: scale(0.9);
    }
`;

export const GhostButton = styled.button`
    background-color: white;
    color: black;
    border: 1px solid black;
    padding: 8px 20px;
    cursor: pointer;
    text-transform: uppercase;

    &:focus {
        transform: scale(0.9);
    }
`;