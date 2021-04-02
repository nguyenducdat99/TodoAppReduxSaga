import apiConnec from './apiConnect';

export const getProduct = async () => {
    const response = await apiConnec('products',"GET",null);

    return response;
}

export const addProduct = async data => {
    const response = await apiConnec('products', 'POST', data);

    return response;
}