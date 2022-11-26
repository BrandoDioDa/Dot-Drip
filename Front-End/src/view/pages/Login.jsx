import {Link} from "react-router-dom";
import React, { useState } from "react";
import "../../App.css"
import { useEffect, setState } from "react";
import axios from "axios";

const Login =(props) => {
    const [user, Username] = useState(' ');
    const [password, setPass] = useState(' ');
    const [token, setToken] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:4000/api/Auth').then(response => {
            setToken(response.data);
        });
        console.log(token);
    }
    
    return(
        <div className="App">
            <div className="auth-form-conatiner">
        <form className="Login-form" onSubmit={handleSubmit}>

                <label for="Username">Username</label>
                <input value={user} onChange={(e) => Username(e.target.value)} type="username" placeholder="username" id="username" name="username" />

                <label for="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
            <button onClick={handleSubmit}>Log in</button>
        </form>
            <Link to={"/Signin"}>
                <button className="link-btn">Don't have an account? Sign in Here.</button>
            </Link>
        </div>
        </div>
    );
}

export default Login;