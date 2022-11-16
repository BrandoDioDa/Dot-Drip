import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
    return await axios.get('${apiUrl}/prodType');
}

export const getProductById = async (id) => {
    return await axios.get('${apiUrl}/Products/prodList/${id}');
}