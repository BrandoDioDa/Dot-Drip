import {Link} from "react-router-dom";
import React from "react";
import "../cssDesign/main.css"
const Admin =() => {
    return(
        <div className="Bcolor">
            <h1 className="textColor">
                Admin Page
            </h1>
            <Link to="/">
                <button type="button" className="button">
                    Home
                </button>
            </Link>
        </div>
    );
}

export default Admin;