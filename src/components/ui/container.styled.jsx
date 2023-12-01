import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    
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