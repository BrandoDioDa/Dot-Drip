import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
    return await axios.get(`${apiUrl}/prodLists`);
}

export const getProductById = async (id) => {
    return await axios.get(`${apiUrl}/Products/prodLists/${id}`);
}

export const createProduct = async (itemObj) => {
    return await axios.post(`${apiUrl}/Products/prodLists`, itemObj);
}

export const editProduct = async (itemObj, id) => {
    await axios.put(`${apiUrl}/Products/prodLists/${id}`, itemObj);
}

export const deleteProduct = async (id) => {
    await axios.delete(`${apiUrl}/Products/prodLists/${id}`);
}