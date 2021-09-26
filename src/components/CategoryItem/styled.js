import styled from 'styled-components';

export const Container = styled.div`
    width: 80px;
    height: 80px;
    background-color: #AAE09A;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:20px;
    margin-right: 10px;
    cursor: pointer;
    transition: all ease .2s;

    &:hover{
        background-color: #FFF !important;
    }

`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
    
`;



