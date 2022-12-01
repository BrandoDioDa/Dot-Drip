import React, { useState, useEffect } from "react";
import {getAllProducts, getProductById} from "../../../services/productsService";
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