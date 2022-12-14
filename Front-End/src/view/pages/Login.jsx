import {Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import "../../App.css"
import axios from "axios";
import NavBar from "../../Components/navBar";

const Login =(props) => {
    const [user, Username] = useState('');
    const [password, setPass] = useState('');
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
            axios.get(`http://localhost:4000/api/Users/auth/${user}/${password}`)
            .then(response => {
                if ( response.status === 200 ) { // Login!
                    setContent(<p>Successfully Logged in!</p>)
                    localStorage.setItem('userData', JSON.stringify(response.data));
                    NavBar.loggedIn = "TRUE";
                    // TODO-Redirect to the page, store the information on the system?
                    navigateHome();
                }
                else if ( response.status === 204  || response.status === 205) { // Wrong password
                    setContent(<p>Wrong username or password.</p>);
                }
                else {                  // Other error
                    // Failed!
                    setContent(<p>Error getting login. Please try again.</p>);
                }
            })
            .catch(function(error) {
                setContent(<p>Account is not found. Please try again.</p>)
                console.log(error);
            });
        }
    }
    
    return(
        <div className="App">
            <div className="auth-form-conatiner">
        <form className="Login-form" onSubmit={handleSubmit}>

                <label htmlFor="Username">Username</label>
                <input value={user} onChange={(e) => Username(e.target.value)} type="username" placeholder="username" id="username" name="username" />

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password"/>
                <button type="submit">Log in</button>
        </form>
        {content}
            <Link to={"/SignUp"}>
                <button className="link-btn">Don't have an account? Sign in Here.</button>
            </Link>
        </div>
        </div>
    );
}

export default Login;