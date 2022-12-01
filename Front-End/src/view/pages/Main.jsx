import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import "../cssDesign/main.css"

const Main =() => {
    let local = localStorage.getItem('userData');
    var name;
    if ( local === 'null' || local === null || local == 'undefined') {
        name = "Guest";
    }
    else {
        name = (JSON.parse(local)).username;
    }

    return(
        <div className="BackgroundColor">
            <div className="center">
                <div className="container-fluid text-left mb-2 d-inline">
                    <h2>
                        <div className="text-left text-break" style={{fontSize: "4.5vh"}}>Welcome to Dot-Drip, {name}.</div>
                        <div className="text-left text-break" style={{fontSize: "2vh"}}>Get started by exploring our products making an account with Dot-Drip. Already have an account? Log-in and begin exploring all our dotted products!</div>
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