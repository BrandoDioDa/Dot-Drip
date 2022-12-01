import './App.css';
import Main from "./view/pages/Main";
import Cart from "./view/pages/Cart";
import Clothes from "./view/pages/Clothes/Clothes";
import NotFound from "./view/pages/NotFound";
import NavBar from "./Components/navBar";
import Login from "./view/pages/Login";
import AboutUs from "./view/pages/AboutUs";
import SignUp from "./view/pages/Signup";
import Admin from "./view/pages/Admin"
import Coupon from "./view/pages/Coupon"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {FooterContainer} from "./containers/footer";


function App() {

    return (
    <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/Admin" element={<Admin/>} />
                <Route path="/Cart" element={<Cart/>} />
                <Route path="/Clothes" element={<Clothes/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/SignUp" element={<SignUp/>} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/Coupon" element={<Coupon/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <FooterContainer/>
        </BrowserRouter>
    </div>
    );
    
}

export default App;
