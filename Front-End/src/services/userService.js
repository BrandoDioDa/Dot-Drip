import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getUserById = async (id) => {
    return await axios.get(`${apiUrl}/Products/users/${id}`);
}

export const getUserByUsername = async (username) => {
    return await axios.get(`${apiUrl}/Users/users/${username}`);
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

