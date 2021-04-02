import apiConnect from './apiConnect';

export const getProduct = async () => {
    const response = await apiConnect('products',"GET",null);

    return response;
}

export const addProduct = async data => {
    const response = await apiConnect('products', 'POST', data);

    return response;
}

export const deleteProduct = async id => {
    const response = await apiConnect(('products/'+id),'DELETE',null);

    return response;
}