import React from 'react'
import {Container,CategoryImage} from './styled'

export default ({data, activeCategory,setActiveCategory}) =>{

    const handleCategory=() =>{
        setActiveCategory(data.id)
    }
    return(
        <Container style={{backgroundColor:(activeCategory == data.id ? '#FFF' : '#AAE09A')}}
         onClick={handleCategory} data-tip={data.name} data-for="tip-top" >
            <CategoryImage src={data.image}/>
        </Container>
    );
}