import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

const Pane = styled.div`
    flex: ${ props => props.weight };
`;

export const SplitDiv = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    const [ left, right ] = children;
    return (
        <Container>
            <Pane weight={ leftWeight }>
                { left }
            </Pane>
            <Pane weight={ rightWeight }>
                { right }
            </Pane>
        </Container>
    )
}