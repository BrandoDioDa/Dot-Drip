import './App.css';
import Main from "./view/pages/Main";
import Cart from "./view/pages/Cart";
import NotFound from "./view/pages/NotFound";
import NavBar from "./Components/navBar";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Main/>} /> //Routes to main page
                <Route path="/Cart" element={<Cart/>} /> //Routes to cart page
                <Route path="*" element={<NotFound/>} /> //An unknown route will take you to 404
            </Routes>
        </BrowserRouter>
    );
}

export default App;
