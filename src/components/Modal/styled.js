import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left:0;
    top:0;
    right:0;//isso para pegar a pg toda...
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index:1;//para poder ficar por cima do carrinho que tb é fixed
    //para os itens dentro dele ir para o centro
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    width: 600px;
    height: 400px;
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    max-height: 90vh;
    overflow: auto;//se o tam passar do lmite ele manda uma barra de rolagenm...
`;