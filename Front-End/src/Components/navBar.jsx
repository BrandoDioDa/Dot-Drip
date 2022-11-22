import React from "react";
import {Link} from "react-router-dom";
import Logo from "../view/images/Raindrop.png"
const NavBar =() => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand " href="/">
                <img src={Logo} style={{width:30, height:30}} className="d-inline-block align-top" alt=""/> Dot-Drip
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkUp" aria-controls="navbarNavAltMarkUp" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkUp">
                <a className="nav-link active textColor" href={"/Clothes"}>Clothes<span className="sr-only">(current)</span></a>
                <a className="nav-link active textColor" href="/Clothes">Shoes<span className="sr-only">(current)</span></a>
                <a className="nav-link active textColor" href="/">Popular-Items<span className="sr-only">(current)</span></a>
                <form className="d-flex">
                    <Link to="/Signin"><button className="btn btn-outline-secondary my-2 my-sm-0"  type="button" placeholder="Login">Sign-up</button></Link>
                    <Link to={"/Login"}><button className="btn btn-outline-success my-2 my-sm-0" type="button" placeholder="Login">Log-in</button></Link>
                </form>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;