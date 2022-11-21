import './App.css';
import Main from "./view/pages/Main";
import Cart from "./view/pages/Cart";
import Clothes from "./view/pages/Clothes";
import NotFound from "./view/pages/NotFound";
import NavBar from "./Components/navBar";
import Login from "./view/pages/Login";
import Signin from "./view/pages/Signin";
import Admin from "./view/pages/Admin";
import About from "./view/pages/AboutUs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/Admin" element={<Admin/>} />
                <Route path="/Cart" element={<Cart/>} />
                <Route path="/Clothes" element={<Clothes/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signin" element={<Signin/>} />
                <Route path="/AboutUs" element={<About/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
