import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { Container, Titulo } from './styled';
import { useSelector } from 'react-redux';

import Header from '../../components/Header/index'

export default () => {
    const history = useHistory();
    const [search, setSearch] = useState('');

    return (
        <Container>
            <Header search={search} setSearch={setSearch} />
        </Container>
    );
}