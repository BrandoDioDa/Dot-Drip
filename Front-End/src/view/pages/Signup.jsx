import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react"
import "../../App.css"
import axios from 'axios'
import {getUserByUsername} from "../../services/userService";
import {createCheckout} from "../../services/checkoutService";

const Signin = (props) => {
    const [user, setUsername] = useState('');
    const [repass, setRepass] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState('');
    
    const nav = useNavigate();

    const navigateHome = () => {
        // 👇️ navigate to /
        nav('/');
    };

    const HandleSubmit = async (e) => {
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
            axios.get(`http://localhost:4000/api/Users/users/username/${user}`)
            .then(function(response) {
                console.log(response.status);
                if ( response.status === 204 ) {        // did not find a username in the database
                    // Add to the database!
                    axios.post("http://localhost:4000/api/Users/users/add",
                    {  name:   user,
                        password:   pass,
                        email:      email,})
                    .then(async function (response) {
                        setContent(<p>Created account!</p>);
                        console.log(response);
                        await getUserId()
                        console.log(id)
                        createCheckout({
                            account: response.data._id,
                            date: Date.now(),
                            cart: {

                            },
                            shippingInfo: {
                                firstname: 'def',
                                lastname: 'def',
                                city: 'def',
                                state: 'def',
                                zipcode: 'def',
                            },
                            payment: {
                                type: 'def',
                                cardNum: 'def',
                                nameOnCard: 'def',
                                securityNum: 'def',
                                expDate: 'def',
                                amount: 0
                            }
                        })
                        // Logs into their account, sets localdata
                        localStorage.setItem('userData', JSON.stringify({username: user, role: "USER"}));
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

    async function getUserId() {
        const responseCheckout = await getUserByUsername(user);
        console.log(responseCheckout.data);
        setId(responseCheckout.data);
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