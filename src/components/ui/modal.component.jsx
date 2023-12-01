import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { RemoveButton } from './remove-button.styled';


export const Modal = ({ showModal, closeModal, children }) => {

    /* const animationBody = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        config: config.slow
    });

    const animationBackground = useSpring({
        opacity: showModal ? 1 : 0
    }); */


    return (
        <>
        { showModal && (
            <ModalBackground onClick={closeModal}>
                <ModalBody onClick={e => e.stopPropagation()}>
                    <RemoveButton handleClick={ closeModal } />
                        { children }
                </ModalBody>
            </ModalBackground>
        )}
        </>
    )
}

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0,0.5);
    transition: display 2s;
`;

const ModalBody = styled.div`
    background-color: white;
    color: black;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
    max-height: 80vh;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    position: relative;
    transition: display 2s;
`;