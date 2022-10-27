import {Link} from "react-router-dom";
import React from "react";
import "../cssDesign/main.css"
const Main =() => {
    return(
        <div className="Bcolor">
            <h1 className="textColor">
                Dot-Drip
            </h1>
            <Link to="/Cart">
                <button type="button" className="button">
                    Cart
                </button>
            </Link>
        </div>
    );
}

export default Main;