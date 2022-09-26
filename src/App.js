import logo from './logo.svg';
import './App.css';
import Main from "./view/pages/Main";
import Cart from "./view/pages/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} /> //Routes to main page
        <Route path="/Cart" element={<Cart/>} /> //Routes to cart page
      </Routes>

    </BrowserRouter>
  );
}

export default App;
