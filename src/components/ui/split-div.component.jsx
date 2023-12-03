import styled from 'styled-components';

/* A Layout component providing two flexible columns. Expects two child components to display in left
and right panes, along with their respective weights. Will default to equal columns if no weight is provided. */
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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

/* Sets flex based on the weight prop */
const Pane = styled.div`
    flex: ${ props => props.weight };
`;