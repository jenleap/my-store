import styled from 'styled-components';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import { RemoveButton } from './remove-button.styled';


export const Modal = ({ showModal, closeModal, children }) => {
    return (
        <>
        { showModal && (
            <Fade in={ showModal }>
            <ModalBackground onClick={closeModal}>
                <Grow in={showModal} {...(showModal ? { timeout: 600 } : {})}>
                <ModalBody onClick={e => e.stopPropagation()}>
                    <RemoveButton handleClick={ closeModal } />
                        { children }
                </ModalBody>
                </Grow>
            </ModalBackground>
            </Fade>
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
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    position: relative;
    transition: display 2s;
`;