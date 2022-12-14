import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
    return await axios.get(`${apiUrl}/Products`);
}

export const getProductById = async (id) => {
    return await axios.get(`${apiUrl}/Products/products/${id}`);
}

export const createProduct = async (itemObj) => {
    return await axios.post(`${apiUrl}/Products/prodLists`, itemObj);
}

export const editProduct = async (itemObj, id) => {
    await axios.put(`${apiUrl}/Products/add/${id}`, itemObj);
}

export const deleteProduct = async (id) => {
    return await axios.get(`${apiUrl}/Products/`);
}

export const getProductsFromQuery = async (jsonQuery) => {
    console.log(jsonQuery);
    return await axios.get(`${apiUrl}/Products/query/${jsonQuery}`);
}