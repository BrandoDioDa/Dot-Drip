import {Link} from "react-router-dom";
import React from "react";
import "../cssDesign/main.css"
const Clothes =() => {
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
        </div>
    );
}

export default Clothes;