import {Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import "../../App.css"
import axios from "axios";

const Coupon =(props) => {
    const [user, Username] = useState('');
    const [password, setPass] = useState('');
    const [content, setContent] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Check the login ...
        if ( !user ) {
            setContent(<p>Please enter Username!</p>);
        }
        else {
            axios.get(`http://localhost:4000/api/Coupons/${user}`)
            .then(response => {
                if ( response.status === 200 ) { // Login!
                    console.log(response);
                    setContent(<p>{response.data.discountAmount}</p>);
                }
                else if ( response.status === 204 ) { // Wrong password
                    setContent(<p>Wrong password or email. Please check</p>);
                }
                else {                  // Other error
                    // Failed!
                    setContent(<p>Error getting login. Please try again.</p>);
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
    
    return(
        <div className="App">
            <div className="auth-form-conatiner">
        <form className="Login-form" onSubmit={handleSubmit}>

                <label for="Username">Username</label>
                <input value={user} onChange={(e) => Username(e.target.value)} type="username" placeholder="username" id="username" name="username" />
        </form>
        {content}
        <button onClick={handleSubmit}>Check</button>
        </div>
        </div>
    );
}

export default Coupon;