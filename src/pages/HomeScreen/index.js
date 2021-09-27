import React,{useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList, ProductArea, ProductList, ProductPaginationArea,ProductPaginationItem} from './styled';
import { useSelector } from 'react-redux';
import api from '../../helpers/api.js';
import ReactTooltip from 'react-tooltip'

import Header from '../../components/Header/index'
import CategoryItem from '../../components/CategoryItem/index'
import ProductItem from '../../components/ProductItem/index.js'

let timer = null;

export default () => {
    const history = useHistory();

    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState(0);//mesma string de todas as categorias
    
    const [listCategories, setListCategories] = useState([]);
    const [listProducts, setListProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [activePage, setActivePage]= useState(1);//armazena pg atual
    const [activeSearch, setActiveSearch] = useState('');//pesquisa

    const getProducts = async () =>{
        const prods = await api.getProducts(activeCategory,activePage, activeSearch);
        if(prods.error == ''){
            setListProducts(prods.result.data);
            setTotalPages(prods.result.pages);//qnt de pages
            setActivePage(prods.result.page)//pg atual
        }
    }

    useEffect(() =>{
        /*
        (async () => {
            const categories = await api.getCategories();
            console.log(categories);
       })();*/
        getProducts();
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
        setListProducts([]);//zero meu array para enquanto carregar some os prods
        setTotalPages();
        getProducts();

    },[activeCategory, activePage,activeSearch])

    useEffect(() =>{
        clearTimeout(timer)//limpo o timer qnd chama a função caso ela for chamada varias vezes..
        timer = setTimeout(() =>{
                setActiveSearch(search);//ta no useEffect de cima...
                //console.log('search');
        },2000);// a cada 2 segundos executa tal função
    },[search])///monitora minha busca

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
            {listProducts.length > 0 && 
                <ProductArea>
                    <ProductList>
                        {listProducts.map((i,k)=>(
                            <ProductItem Key={k} data={i}/>
                        ))}
                    </ProductList>
                </ProductArea>
            }
            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((i, k) =>(
                        <ProductPaginationItem onClick={()=> setActivePage(k+1)} key={i} style={{backgroundColor : (activePage == (k + 1)? '#DDD' : '#FFF') }}>
                            {k + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }
        </Container>
    );
}