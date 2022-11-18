import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../cssDesign/main.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import testData from './test.json'
import ProductCard from "../jsComponents/ProductCard";

const Clothes =() => {

    const { id } = useParams();
    const url = `http://localhost:4000/api/Products`;               // HTTPS breaks it for SSL reasons
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null;

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })

        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() =>{
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if(products.error){
        content = <p>
            There was an error fetching the stuff!
        </p>
    }
    if(products.loading){
        //content=<Loader></Loader>   DOnt have loader :,(
        content=
        <p>Loading...</p>
    }
    if(products.data){
        content = (products.data).map((product, key) =>
            <div>
                <ProductCard product={product}/>
            </div>
        )
    }

    // Content holds the dynamic JS stuff

    return(
        <div className="Bcolor">
            <h1>
                Clothes
            </h1>
            <Link to="/">
                <button type="button" className="button">
                    Home Page
                </button>              
            </Link>
            {content}
        </div>

    );
}

export default Clothes;

