import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const CategoryArea = styled.div`
    color: #FFF;
    margin-top: 20px;
`;

export const CategoryList = styled.div`
    display: flex;
    margin-top: 10px;
    
`;

export const ProductArea = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;    
`;


export const ProductList = styled.div`
   display: grid;//separação em 3 das listas de produtos
    grid-template-columns: repeat(3, 1fr);//tantos por linahs
    grid-gap: 15px;//espaço entre eles...em cima baixo, lados
`;
 
export const ProductPaginationArea = styled.div`
    display: flex;//ficar um ao lado do outro.
    flex-wrap: wrap;//se n couber ele pode ir para a linha abaixo...
    margin-top: 20px;
`;

export const ProductPaginationItem= styled.div`
    background-color: #FFF;
    padding: 5px 10px;//5 altura e 10 larg
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0,0,0, 0.16);
    cursor: pointer;
    margin-right: 10px;
`;


