let BASE = 'https://api.b7web.com.br/devsfood/api';



export default {//objeto com os metodos que vou utilizar...
   
    getCategories: async () =>{
        //get e /categories
        const res = await fetch(BASE + '/categories');
        const json = await res.json();

        return json;
    }

};