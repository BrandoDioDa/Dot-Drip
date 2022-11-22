import {Link} from "react-router-dom";
import React, { useState } from "react";
import "../../App.css"

const Login =( props ) => {
    const [user, Username] = useState(' ');
    const[password, setPass] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
}
    
    return(
        <div className="App">
            <div className="auth-form-conatiner">
        <form className="Login-form" onSubmit={handleSubmit}>

                <label form="Username">Username</label>
                <input value={user} onChange={(e) => Username(e.target.value)} type="username" placeholder="username" id="username" name="username"/>

                <label form="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
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