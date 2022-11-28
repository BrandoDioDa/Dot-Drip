import {Link} from "react-router-dom";
import React, {useState} from "react"
import "../../App.css"

const Signin = (props) => {
    const [user, Username] = useState('');
    const [repass, reenterpass] = useState('');
    const [pass, setPass] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
}

    return(
        <div className="App">
            <div className="auth-form-conatiner">
       <form className="Signin-form" onSubmit={handleSubmit}>

        <label htmlFor="Username">Username</label>
        <input value={user} onChange={(e) => Username(e.target.value)} type="Username" placeholder="Username" id="Username" name="Username" />

        <label htmlFor="Password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="Password" id="Password" name="Password" />

        <label htmlFor="Re-Enter Password">Re-Enter Password</label>
        <input value={repass} onChange={(e) => reenterpass(e.target.value)} type="Password" placeholder="Re-Enter Password" id="Re-Enter Password" name="Re-Enter Password" />

        <button onClick={handleSubmit}>Register</button>
       </form>
       <Link to={"/Login"}><button className="link-btn">Already have an account? Login Here.</button></Link>
       </div>
       </div>
    );
}

export default Signin;