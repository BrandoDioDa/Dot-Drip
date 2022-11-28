import './App.css';
import Main from "./view/pages/Main";
import Cart from "./view/pages/Cart";
import Clothes from "./view/pages/Clothes/Clothes";
import NotFound from "./view/pages/NotFound";
import NavBar from "./Components/navBar";
import Login from "./view/pages/Login";
<<<<<<< HEAD
import AboutUs from "./view/pages/AboutUs";
=======
>>>>>>> b4ed576591a51feb4cd2221b407e583364eb99bb
import Signin from "./view/pages/Signup";
import Admin from "./view/pages/Admin"
import Checkout from "./view/pages/Checkout"
import {BrowserRouter, Routes, Route} from "react-router-dom";


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
                <Route path="/Signin" element={<Signin/>} />
<<<<<<< HEAD
                <Route path="/AboutUs" element={<AboutUs/>} />
=======
                <Route path="/Checkout" element={<Checkout/>} />
>>>>>>> b4ed576591a51feb4cd2221b407e583364eb99bb
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
        
    </div>
    );
}

export default App;
