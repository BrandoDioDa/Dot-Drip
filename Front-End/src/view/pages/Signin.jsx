import {Link} from "react-router-dom";
import React, {useState} from "react"
import "../../App.css"
import axios from 'axios'


const Signin = (props) => {
    const [user, setUsername] = useState('');
    const [repass, setRepass] = useState('');
    const [pass, setPass] = useState('');

    const HandleSubmit = (e) => {
        e.preventDefault();
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

        <button onClick={HandleSubmit}>Register</button>
       </form>
       <Link to={"/Login"}><button className="link-btn">Already have an account? Login Here.</button></Link>
       </div>
       </div>
    );
}

export default Signin;