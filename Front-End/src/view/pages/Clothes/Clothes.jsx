import "../../cssDesign/clothes.css"

import ClothesHeader from "./Header";
import ProductDisplay from "./ProductDisplay";
import Filter from "./Filter";
import React, { useState, useEffect } from "react";
import {getAllProducts, getProductById, getProductsFromQuery} from "../../../services/productsService";

export default function Clothes(){

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    //const [search, setSearch] = useState('');

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const response = await getAllProducts();
        setProducts(response.data);
        setAllProducts(response.data);
    }

    async function showShirts() {
        await unshowItem();
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
        await unshowItem();
        try {
            const response = await getProductsFromQuery(JSON.stringify({prodType: "shoe"}));
            setProducts(response.data);
        }
        catch {
            console.log("error happened");
        }
    }

    async function showSocks() {
        await unshowItem();
        try {
            const response = await getProductsFromQuery(JSON.stringify({prodType: "Socks"}));
            setProducts(response.data);
        }
        catch {
            console.log("error happened");
        }
    }

    async function showPants() {
        await unshowItem();
        try {
            const response = await getProductsFromQuery(JSON.stringify({prodType: "Pants"}));
            setProducts(response.data);
        }
        catch {
            console.log("error happened");
        }
    }

    async function sortByQuantityAsc() {
        await unshowItem();
        const sorted = products.sort((a, b) => (a.prodQuan > b.prodQuan) ? 1 : -1);
        setProducts( sorted.map((item) => item) );
    }

    async function sortByQuantityDesc() {
        await unshowItem();
        const sorted = products.sort((a, b) => (a.prodQuan > b.prodQuan) ? -1 : 1);
        setProducts( sorted.map((item) => item) );
    }

    async function sortByPriceAsc() {
        await unshowItem();
        const sorted = products.sort((a, b) => (Number(a.prodPrice.replace(/[^0-9.-]+/g,"")) > Number(b.prodPrice.replace(/[^0-9.-]+/g,""))) ? 1 : -1);
        setProducts( sorted.map((item) => item) );
    }

    async function sortByPriceDesc() {
        await unshowItem();
        const sorted = products.sort((a, b) => (Number(a.prodPrice.replace(/[^0-9.-]+/g,"")) > Number(b.prodPrice.replace(/[^0-9.-]+/g,""))) ? -1 : 1);
        setProducts( sorted.map((item) => item) );
    }

    async function unshowItem() {
        const response = await getAllProducts();
        setProducts( response.data );
    }

    async function search(e) {
        console.log(e.target.value);
        //setSearch(value);
        //const response = await getProductsFromQuery(JSON.stringify({ $text: { $search: (e.target.value) } }));
        const response = await getProductsFromQuery(JSON.stringify({ prodName: { $regex: e.target.value } }));
        console.log(response);
        if ( response.data.length === 0 ) {
            await getProducts()
        }
        else {
            setProducts( response.data );
        }
    }

    return(
        <div className="BackgroundColor">
            <ClothesHeader/>
            <Filter
                search = {search}
                showShirts = {showShirts}
                showShoes = {showShoes}
                showPants = {showPants}
                showSocks = {showSocks}
                sortByQuantityAsc = {sortByQuantityAsc}
                sortByQuantityDesc = {sortByQuantityDesc}
                sortByPriceAsc = {sortByPriceAsc}
                sortByPriceDesc = {sortByPriceDesc}
                unshowItem = {unshowItem}
            />
            <ProductDisplay products={products}/>
        </div>
    );
}

