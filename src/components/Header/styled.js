import styled from 'styled-components'

export const Container = styled.div`
    //width: 100%; se eu deixar com isso ele pega o tam todo do Container la do Home e ai vai jogar para o lado
    background-color:#136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;//vou colocar lado a lado 2 itens
    justify-content: space-between;//fica um espaço entre os itens, um em cada lado..
    align-items: center;
`;

export const Logo = styled.img`
    height:70px;
    width: auto;
`;

export const SearchInput = styled.input`
    border: 0;//!
    border-radius: 25px;
    width: 0px;
    height: 50px;
    background-color: #FFF;
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;//10px
    outline: 0;//n fica o quadrado ao redor do input
    padding-left: 50px;
    cursor:pointer;
`;