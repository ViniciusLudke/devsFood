import React from 'react';
import {Container,ModalBody} from './styled.js'

export default ({children, status,setModalStatus}) =>{

    const handleModalClick = (e) =>{
        if(e.target.classList.contains('modalBg'))//para ele n sair qnd clicar dentro da pg, so qnd clicar fora...
        {
            setModalStatus(false);
        }
    }

    return(
        <Container className="modalBg" style={{display: (status ? 'flex' : 'none')}} onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    );
}