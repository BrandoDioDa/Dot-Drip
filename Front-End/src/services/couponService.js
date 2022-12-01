import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const checkCoupon = async (id) => {
    return await axios.get(`${apiUrl}/Coupons/${id}`);
}