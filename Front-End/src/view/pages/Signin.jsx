import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react"
import "../../App.css"
import axios from 'axios'

const Signin = (props) => {
    const [user, setUsername] = useState('');
    const [repass, setRepass] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [localData, setLocalData] = useState('');

    
    const nav = useNavigate();


    const navigateHome = () => {
        // 👇️ navigate to /
        nav('/');
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        // Checks for input
        if ( !user ) {
            setContent(<p>Please enter username</p>);
        }
        if ( !pass ) {
            setContent(<p>Please enter password</p>);
        }
        else if ( !repass ) {
            setContent(<p>Please reenter password</p>);
        }
        else if ( pass===repass ) {
            // Check the database for a username... how I do that
            fetch(`http://localhost:4000/api/Users/users/username/${user}`, {
                method:"GET",
                crossDomain:true,
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    "Access-Control-Allow-Origin":"*",
                },
            })
            .then(function(response) {
                console.log(response.status);
                if ( response.status === 204 ) {        // did not find a username in the database
                    // Add to the database!
                    fetch("http://localhost:4000/api/Users/users/add", {
                        method:"POST",
                        crossDomain:true,
                        headers:{
                            "Content-Type":"application/json",
                            "Accept":"application/json",
                            "Access-Control-Allow-Origin":"*",
                        },
                        body:JSON.stringify({
                            name:       user,
                            password:   pass,
                            email:      email,
                        }),
                    })
                    .then(function(response) {
                        console.log(response);
                        setContent(<p>Created account!</p>);
                        // Redirect to the main page
                        navigateHome();
                    })
                    .catch(function(error) {
                        console.log(error);
                        setContent(<p>Error creating account</p>);
                    });
                } else {
                    console.log("Username already taken!");
                    setContent(<p>Username already taken! Please enter a different username</p>);
                }
            })
            .catch(function(error) {
                console.log(error);
                setContent(<p>Error creating account</p>);
            });
        } else {
            // Show error on screen
            setContent(<p>ERROR: Passwords do not match!</p>);
        }
    }

    return(
        <div className="App">
            <div className="auth-form-conatiner">
                    <form className="Signin-form" onSubmit={HandleSubmit}>

                        <label htmlFor="Username">Username</label>
                        <input value={user} onChange={(e) => setUsername(e.target.value)} type="Username" placeholder="Username" id="Username" name="Username" />

                        <label htmlFor="Re-Enter Password">Email Address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="johnapple@website.com" id="Email" name="Email" />

                        <label htmlFor="Password">Password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="Password" id="Password" name="Password" />

                        <label htmlFor="Re-Enter Password">Re-Enter Password</label>
                        <input value={repass} onChange={(e) => setRepass(e.target.value)} type="Password" placeholder="Re-Enter Password" id="Re-Enter Password" name="Re-Enter Password" />

                        <button type="submit">Register</button>
                    </form>
                    {content}
                    <Link to={"/Login"}><button className="link-btn">Already have an account? Login Here.</button></Link>
            </div>
       </div>
    );
}

export default Signin;