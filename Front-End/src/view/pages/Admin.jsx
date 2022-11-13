import React from "react";
import "../cssDesign/admin.css"
import "../../App.css"

const handleSubmit = (e) => {
    e.preventDefault();
}

const Admin =() => {
    return(
        <div className="App">
            <div className="auth-form-container">
                <form className="Signin-form" onSubmit={handleSubmit}>
                    <label className="adminText">Choose an item to add:</label>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-target="#adminDrop" aria-expanded="true">
                            Product Type
                        </button>
                        <div id="adminDrop" className="collapse">
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><label className="dropdown-item">Action</label></li>
                                <li><label className="dropdown-item">Another action</label></li>
                                <li><label className="dropdown-item">Something else here</label></li>
                        </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Admin;