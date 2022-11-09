import React from "react";
import {Link} from "react-router-dom";
import "../cssDesign/loginContain.css";

const LoginContainer =() => {
    return(
    <Link to="/">
      <html>
        <body>
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>
      
                            <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required>
                                <button type="submit">Login</button>
                        </input>
                    </input>
                </div>
      
                <div class="container" style="background-color:#f1f1f1">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </body>
        </html>
    </Link>
    );
}

export default LoginContainer;