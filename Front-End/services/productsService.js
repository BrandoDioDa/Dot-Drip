import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
    return await axios.get(`${apiUrl}/prodType`);
}

export const getProductById = async (id) => {
    return await axios.get(`${apiUrl}/Products/prodList/${id}`);
}

export const createProduct = async (itemObj) => {
    return await axios.post(`${apiUrl}/items/item`, itemObj);
}

export const editProduct = async (itemObj, id) => {
    await axios.put(`${apiUrl}/items/item/${id}`, itemObj);
}

export const deleteProduct = async (id) => {
    await axios.delete(`${apiUrl}/items/item/${id}`);
}