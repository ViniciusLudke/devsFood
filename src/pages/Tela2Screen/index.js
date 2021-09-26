import React,{useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Titulo } from './styled';

export default () => {
    const history = useHistory();
    const dispatch = useDispatch();

    let { nome } = useParams();

    const name = useSelector(state => state.user.name);

    useEffect(() =>{
        dispatch({
            type: 'SET_NAME',
            payload:{
                name: 'VINIIIII'
            }})
    },[])


    return (
        <Container>
            <Titulo>Tela2 de {nome}</Titulo>

            <input type="text"/>

            <button onClick={()=>history.goBack()}>Voltar</button>
        </Container>
    );
}