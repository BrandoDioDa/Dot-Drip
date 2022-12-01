import React, { useState, useEffect } from "react";
import {getAllProducts, getProductById, getProductsFromQuery} from "../../../services/productsService";
import "../../cssDesign/clothes.css"
import ProductCard from "../../../Components/ProductCard";


const ProductDisplay = ({products}) => {
    //Create useEffect to obtain product information from backend when page begins rendering
    //Service call to backend to request all products from DB
    //Middleman to collect items into local variable
    //Map listed contents

    console.log(this);

    return(
        <div className="container">
            {/* <input type="checkbox" onClick={updateCheck} className="btn-check" id="shirt-check" autoComplete="off" />Show Shirts<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="shoes-check" autoComplete="off" />Show Shoes<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="quantity-sort-asc" autoComplete="off" />Sort by Quantity ASC<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="quantity-sort-des" autoComplete="off" />Sort by Quantity DES<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="price-sort-asc" autoComplete="off" />Sort by Price ASC<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="price-sort-des" autoComplete="off" />Sort by Price DES<br></br>
            <input type="checkbox" onClick={unCheck} className="btn-check" id="price-sort-des" autoComplete="off" />UNcheck all<br></br> */}

            <div className="row">
                {products.map((product) => (
                    <div key={product._id} className="px-5 my-3 col-md-4">
                        <ProductCard obj={product}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDisplay;