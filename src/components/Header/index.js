import React,{useState} from 'react';
import {Container, Logo, SearchInput} from './styled.js'

export default (props) =>{

    const [inputActive, setInputActive] = useState(props.search.length == 0 ? false : true);//verifico se tem algo ou n
    //verifico se tem texto se tiver eu ja deixo aberta a aba...

{/* quando bota o cursor nesse campo ativa tal funcao...*/}
    const handleInputFocus = () =>{
        setInputActive(true);
    }
{/* quando tira o cursor nesse campo ativa tal funcao...*/}
    const handleInputBlur = () =>{
        if(props.search.length == 0){//mesma coisa que (props.search.lenght == '')
        setInputActive(false);
        }
    }


    return(
        <Container>
            <Logo src="/assets/logo.png"/>
            <SearchInput 
            style={{width: (inputActive ? '350px': '0px')}}
            type="Text"
            value={props.search}
            placeholder="Digite um produto"
            onChange={(e) =>props.setSearch(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            />
        </Container>
    );
}