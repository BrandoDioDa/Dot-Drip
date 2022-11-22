import {Link} from "react-router-dom";
import React, { useState } from "react";
import "../../App.css"
import useAxiosGet from "../../Hooks/HttpRequests";

const Login =(props) => {
    const [user, Username] = useState(' ');
    const[password, setPass] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    async function GrabUser(url) {
        let response = await useAxiosGet(url);
        if ( response.data ) {
            console.log("Data found");
        }
    }
    
    return(
        <div className="App">
            <div className="auth-form-conatiner">
        <form className="Login-form" onSubmit={handleSubmit}>

                <label for="Username">Username</label>
                <input value={user} onChange={(e) => Username(e.target.value)} type="username" placeholder="username" id="username" name="username" />

                <label for="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
            <button>Log in</button>
        </form>
            <Link to={"/Signin"}>
                <button className="link-btn">Don't have an account? Sign in Here.</button>
            </Link>
        </div>
        </div>
    );
}

export default Login;