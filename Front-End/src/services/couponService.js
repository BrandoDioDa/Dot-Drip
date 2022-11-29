import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const checkCoupon = async (code) => {
    await axios.get(`${apiUrl}/Coupons/${code}`);
}