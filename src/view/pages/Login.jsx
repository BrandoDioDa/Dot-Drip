import {Link} from "react-router-dom";
import React from "react";
import "../cssDesign/main.css"
const Login =() => {
    return(
        <div className="Bcolor">
            <h1>
                Login Page
            </h1>
            <Link to="/">
                <button type="button" className="button">
                    Home Page
                </button>
            </Link>
        </div>
    );
}

export default Login;