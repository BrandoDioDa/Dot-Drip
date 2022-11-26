import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {getAllProducts} from "../../services/productsService";
import ProductCard from "../../Components/ProductCard";
import "../cssDesign/main.css"

const Main =() => {
    const user = "";
    let name = user.name;
    if(name==null)
        name = "Guest";

    return(
        <div className="BackgroundColor">
            <div className="center">
                <div className="container-fluid text-left mb-2 d-inline">
                    <h2>
                        <div className="text-left text-break" style={{fontSize: "4.5vh"}}>Welcome to Dot-Drip, {name}.</div>
                        <div className="text-left text-break" style={{fontSize: "2vh"}}>Get started by making an account with Dot-Drip. Already have an account? Log-in and begin exploring all our dotted products!</div>
                        <div className="" style={{paddingTop: "20px"}}>
                            <Link to={"/Clothes"}>
                                <Button variant="dark" size={"lg"} >Get Started</Button>
                            </Link>
                        </div>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Main;