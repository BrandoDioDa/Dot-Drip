import "../../cssDesign/clothes.css"

import ClothesHeader from "./Header";
import ProductDisplay from "./ProductDisplay";
import Filter from "./Filter";
import React, { useState, useEffect } from "react";
import {getAllProducts, getProductById, getProductsFromQuery} from "../../../services/productsService";

export default function Clothes(){

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
        console.log("Showing shirts");
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

    function unCheck() {
        var x = document.getElementsByClassName("btn-check");
        console.log(x);
        for(var i=0; i<=x.length; i++) {
            if ( x[i].checked != null ) { 
                x[i].checked = false;
            }
        }   
        unshowItem();
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
        <div className="BackgroundColor">
            <ClothesHeader/>
            <Filter 
                showShirts = {showShirts}
                showShoes = {showShoes}
                sortByQuantity ={(type) => {
                    sortByQuantity(type);
                }}
                sortByPrice ={(type) => {
                    sortByPrice(type);
                }}
                unshowItem = {unshowItem}
            />
            <ProductDisplay products={products}/>
        </div>
    );
}

//export default Clothes;

