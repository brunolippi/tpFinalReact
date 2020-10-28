import axios from 'axios'

export const getProductos = () => {
        return axios.get('https://jsonfy.com/items');
    }

export const getById = (id) => {
        return axios.get('https://jsonfy.com/items/'+id);
    }
