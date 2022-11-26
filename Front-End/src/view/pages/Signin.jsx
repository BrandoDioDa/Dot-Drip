import {Link} from "react-router-dom";
import React, {useState} from "react"
import "../../App.css"
import axios from 'axios'

const Signin = (props) => {
    const [user, setUsername] = useState({});
    const [repass, setRepass] = useState({});
    const [pass, setPass] = useState({});

    var content="";

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(user,pass,repass);
        if ( pass===repass ) {
            fetch("http://localhost:4000/api/Users/users/add", {
                method:"POST",
                crossDomain:true,
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                    "Access-Control-Allow-Origin":"*",
                },
                body:JSON.stringify({
                    name:       'test',
                    password:   'test',
                    email:      'test',
                }),
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }
        else {
            content = <p>
            Passwords do not match
        </p>
        }
    }

    return(
        <div className="App">
            <div className="auth-form-conatiner">
                    <form className="Signin-form" onSubmit={HandleSubmit}>

                        <label htmlFor="Username">Username</label>
                        <input value={user} onChange={(e) => setUsername(e.target.value)} type="Username" placeholder="Username" id="Username" name="Username" />

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