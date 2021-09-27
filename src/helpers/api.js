let BASE = 'https://api.b7web.com.br/devsfood/api';



export default {//objeto com os metodos que vou utilizar...
   
    getCategories: async () =>{
        //get e /categories
        const res = await fetch(BASE + '/categories');
        const json = await res.json();

        return json;
    },
    getProducts: async (category, page, search) => {
        let fields = {};
        if(category != 0){
            fields.category = category
        }
        if(page > 0){
            fields.page = page
        }
        if(search != ''){
            fields.search = search
        }
        //tenho isso{category: 2, page:2, search: 'bolo'}
        //quero isso "category=2&page=1&search=bolo"

        let queryString = new URLSearchParams(fields).toString();//mando o fields
        //transforma o obj em query string

        const res = await fetch(BASE+'/products?'+queryString)
        const json = await res.json();
        return json;
    }

};