import styled from 'styled-components'


export const CartArea = styled.div`
    background-color: #136713;
    position: fixed;
    border-top-left-radius: 10px;
    border-top-right-radius :10px;
    bottom:0;
    right:30px;
`;

export const CartHeader = styled.div`
    height:50px;
    width: 290px;
    display:flex;//lado a lada os itens 
    align-items: center;//para ficar no meio cima /baixo
    cursor: pointer;//mostrar que eh clicavel a area
`;

export const CartIcon = styled.img`
height:auto;
width: 23px;
margin-left: 15px;
margin-right: 15px;
`;

export const CartText = styled.div`
color: #FFF;
font-size: 17px;
`;

export const CartBody = styled.div``;