import apiConnect from './apiConnect';
import qs from 'query-string';

export const getProduct = async () => {
    const response = await apiConnect('products',"GET",null);

    return response;
}

export const addProduct = async data => {
    const response = await apiConnect('products', 'POST', data);

    return response;
}

export const selectProduct = async id => {
    const response = await apiConnect(('products/'+id),'GET',null);

    return response;
}

export const editProduct = async data => {
    const response = await apiConnect(('products/'+data.id), 'PUT', data);

    return response;
}

export const deleteProduct = async id => {
    const response = await apiConnect(('products/'+id),'DELETE',null);

    return response;
}

export const filterProduct = async (keyword = {}) => {
    let queryString = '';
    if (Object.keys(keyword).length > 0) console.log(qs.stringify(keyword));
}