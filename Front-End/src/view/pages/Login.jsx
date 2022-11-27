import {Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import "../../App.css"
import { useEffect, setState } from "react";
import axios from "axios";

const Login =(props) => {
    const [user, Username] = useState('');
    const [password, setPass] = useState('');
    const [token, setToken] = useState('');
    const [content, setContent] = useState('');

    const nav = useNavigate();


    const navigateHome = () => {
        // 👇️ navigate to /
        nav('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check the login ...
        if ( !user ) {
            setContent(<p>Please enter Username!</p>);
        }
        else if ( !password ) {
            setContent(<p>Please enter Password!</p>);
        }
        else {
            fetch(`http://localhost:4000/api/Users/auth/${user}/${password}`, {
                method:"GET",
                crossDomain:true,
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    "Access-Control-Allow-Origin":"*",
                },
            })
            .then(function(response) {
                if ( response.status === 200 ) { // Login!
                    setContent(<p>Successfully Logged in!</p>)
                    // TODO-Redirect to the page, store the information on the system?
                    navigateHome();
                }
                else if ( response.status === 204 ) { // Wrong password
                    setContent(<p>Wrong password or email. Please check</p>);
                }
                else {                  // Other error
                    // Failed!
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

                <label for="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
                <button type="submit">Log in</button>
        </form>
        {content}
            <Link to={"/Signin"}>
                <button className="link-btn">Don't have an account? Sign in Here.</button>
            </Link>
        </div>
        </div>
    );
}

export default Login;