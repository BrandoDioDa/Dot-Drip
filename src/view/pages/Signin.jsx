import {Link} from "react-router-dom";
import React from "react";
import "../cssDesign/main.css"
const Signin =() => {
    return(
        <div>
            <h1>
                Sign in
            </h1>
            <Link to="/">
                <button type="button" className="button">
                    Home Page
                </button>
            </Link>
        </div>
    );
}

export default Signin;