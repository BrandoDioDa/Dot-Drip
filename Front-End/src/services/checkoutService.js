import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllCheckouts = async () => {
    return await axios.get(`${apiUrl}/Checkouts`);
}

export const getCheckoutById = async (id) => {
    return await axios.get(`${apiUrl}/Checkouts/checkout/${id}`);
}

export const createCheckout = async (itemObj) => {
    return await axios.post(`${apiUrl}/Checkouts/checkout/add`, itemObj);
}

export const editProduct = async (itemObj, id) => {
    await axios.put(`${apiUrl}/Products/add/${id}`, itemObj);
}

export const deleteProduct = async (id) => {
    await axios.delete(`${apiUrl}/Products/delete/${id}`);
}