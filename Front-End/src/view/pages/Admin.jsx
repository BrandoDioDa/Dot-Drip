import React, { useEffect, useState } from "react";
import {Button} from "react-bootstrap";
import {getAllProducts} from "../../services/productsService";
import {getProductById} from "../../services/productsService";
import "../cssDesign/admin.css"
import "../../App.css"


<<<<<<< HEAD
const Admin = () => {
    const [items, setItems] = useState([]);
    async function getItems() {
        const resp = await getAllProducts();
        setItems(resp.data);
    }

    items.forEach(function () {
        console.log(items.pop());
    });

=======
const Admin =() => {
    var loggedIn = "FALSE";
>>>>>>> b4ed576591a51feb4cd2221b407e583364eb99bb
    return(
        <div className="App">
            <div className="auth-form-container">
                <form className="Signin-form">
                    <label className="adminText">Choose a database to access:</label>
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Test
                        </a>
                        <Button onClick={ getItems }>Get Info</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Admin;