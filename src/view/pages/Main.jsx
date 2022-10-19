import {Link} from "react-router-dom";
import React from "react";
import "../cssDesign/main.css"
const Main =() => {
    return(
        <div>
            <h1>
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