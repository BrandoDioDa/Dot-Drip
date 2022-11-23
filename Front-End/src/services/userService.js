import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const jwtString = 'jwtlibraryyt';

export const getUserById = async (id) => {
    return await axios.get(`${apiUrl}/auth/auth/${id}`);
}

export const registerUser = async (userObj) => {
    return await axios.post(`${apiUrl}/auth/signup`, userObj);
}

export const editUser = async (userObj, id) => {
    await axios.put(`${apiUrl}/auth/edit${id}`, userObj);
}

export const deleteUser = async (id) => {
    await axios.delete(`${apiUrl}/auth/auth/${id}`);
}
