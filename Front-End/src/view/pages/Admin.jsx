import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {getAllProducts} from "../../services/productsService";
import "../cssDesign/admin.css"
import "../../App.css"


const Admin = () => {
    const [friendNameTwo, setFriendNameTwo] = useState()

    function handleSubmit() {
        setFriendNameTwo('Luke');
    }


    return(
    <body>
        <div className="App">
            <div className="auth-form-container">
                <form className="Signin-form">
                    <label className="adminText">Choose a database to access:</label>
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>
                        <Button onClick={ handleSubmit }>Change Name</Button>
                        { friendNameTwo }
                    </div>
                </form>
            </div>
        </div>
</body>
    );
}

export default Admin;