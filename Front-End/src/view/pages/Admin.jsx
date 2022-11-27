import React from "react";
import "../cssDesign/admin.css"
import "../../App.css"


const Admin =() => {
    var loggedIn = "FALSE";
    return(
<body>
        <div className="App">
            <div className="auth-form-container">
                <form className="Signin-form">
                    <label className="adminText">Choose a database to access:</label>
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
</body>
    );
}

export default Admin;