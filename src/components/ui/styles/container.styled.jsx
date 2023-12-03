import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    @media (max-width: 480px) {
        width: 90%;
    }
`;

export const RowContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;