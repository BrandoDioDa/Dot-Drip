import React, { useState, useEffect } from "react";
import {getAllProducts, getProductById, getProductsFromQuery} from "../../../services/productsService";
import "../../cssDesign/clothes.css"
import ProductCard from "../../../Components/ProductCard";


const ProductDisplay =() => {
    //Create useEffect to obtain product information from backend when page begins rendering
    //Service call to backend to request all products from DB
    //Middleman to collect items into local variable
    //Map listed contents
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const response = await getAllProducts();
        setProducts(response.data);
        setAllProducts(response.data);
    }

    async function showShirts() {
        try {
            const response = await getProductsFromQuery(JSON.stringify({prodType: "shirt"}));
            setProducts(response.data);
        }
        catch {
            console.log("error happened");
        }
    }

    async function showShoes() {
        try {
            const response = await getProductsFromQuery(JSON.stringify({prodType: "shoe"}));
            setProducts(response.data);
        }
        catch {
            console.log("error happened");
        }
    }

    async function sortByQuantity(type) {
        if ( type === "ASCENDING" ) {
            const sorted = products.sort((a, b) => (a.prodQuan > b.prodQuan) ? 1 : -1);
            setProducts( sorted.map((item) => item) );
        }
        else if ( type === "DESCENDING" ) {
            const sorted = products.sort((a, b) => (a.prodQuan > b.prodQuan) ? -1 : 1);
            setProducts( sorted.map((item) => item) );
        }
        else {
            console.log("Unknown type on sortByQuantity. Please check your call!");
        }
    }

    async function sortByPrice(type) {
        if ( type === "ASCENDING" ) {
            const sorted = products.sort((a, b) => (Number(a.prodPrice.replace(/[^0-9.-]+/g,"")) > Number(b.prodPrice.replace(/[^0-9.-]+/g,""))) ? 1 : -1);
            setProducts( sorted.map((item) => item) );
        }
        else if ( type === "DESCENDING" ) {
            const sorted = products.sort((a, b) => (Number(a.prodPrice.replace(/[^0-9.-]+/g,"")) > Number(b.prodPrice.replace(/[^0-9.-]+/g,""))) ? -1 : 1);
            setProducts( sorted.map((item) => item) );
        }
        else {
            console.log("Unknown type on sortByPrice. Please check your call!");
        }
    }

    async function unshowItem() {
        const response = await getAllProducts();
        setProducts( response.data );
    }

    const updateCheck = (e) => {
        const id = e.target.id;
        if (e.target.checked) {
            if ( id == "shirt-check" ) {
                showShirts().then();
            }
            else if ( id == "shoes-check" ) {
                showShoes().then();
            }
            else if ( id === "quantity-sort-asc" ) {
                sortByQuantity("ASCENDING").then();
            }
            else if ( id === "quantity-sort-des" ) {
                sortByQuantity("DESCENDING").then();
            }
            else if ( id === "price-sort-asc" ) {
                sortByPrice("ASCENDING");
            }
            else if ( id === "price-sort-des" ) {
                sortByPrice("DESCENDING");
            }
            else {
                console.log("Error: ID Not found!");
            }
        }
        else {
            unshowItem();
        }
    }

    return(
        <div className="container">
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="shirt-check" autoComplete="off" />Show Shirts<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="shoes-check" autoComplete="off" />Show Shoes<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="quantity-sort-asc" autoComplete="off" />Sort by Quantity ASC<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="quantity-sort-des" autoComplete="off" />Sort by Quantity DES<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="price-sort-asc" autoComplete="off" />Sort by Price ASC<br></br>
            <input type="checkbox" onClick={updateCheck} className="btn-check" id="price-sort-des" autoComplete="off" />Sort by Price DES<br></br>
            
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