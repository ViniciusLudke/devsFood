import React,{useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList} from './styled';
import { useSelector } from 'react-redux';
import api from '../../helpers/api.js';
import ReactTooltip from 'react-tooltip'

import Header from '../../components/Header/index'
import CategoryItem from '../../components/CategoryItem/index'

export default () => {
    const history = useHistory();

    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState(0);//mesma string de todas as categorias
    
    const [listCategories, setListCategories] = useState([]);

    useEffect(() =>{
        /*
        (async () => {
            const categories = await api.getCategories();
            console.log(categories);
       })();*/

        const getCategories = async () =>{
            const cat = await api.getCategories();
            if(cat.error == ''){
                setListCategories(cat.result)
            }
            ReactTooltip.rebuild();
        }
        getCategories();


    },[])

    useEffect(()=>{



    },[activeCategory])


    return (
        <Container>
            <Header search={search} setSearch={setSearch} />
            {listCategories.length > 0 && 
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem title="" data={{id:0, name:"Todas as categorias", image:"/assets/food-and-restaurant.png"}} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        {listCategories.map((i,k) => (
                            <CategoryItem key={k} data={i} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
        </Container>
    );
}