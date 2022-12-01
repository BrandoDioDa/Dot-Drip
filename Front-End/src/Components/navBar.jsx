import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../view/images/Raindrop.png";
import usericon from "../view/images/usericon.png";
import adminicon from "../view/images/usericonadmin.png";

const NavBar =() => {
    let local = localStorage.getItem('userData');
    let icon = usericon;
    let adminLink = "";
    const nav = useNavigate();

    const navigateHome = () => {
        // 👇️ navigate to /
        nav('/');
    };

    const handleLogOut = (e) => {
        localStorage.setItem('userData', null);
        navigateHome();
    }

    if ( local != 'null' && local != null && local != 'undefined') {
        local = JSON.parse(local);
        if ( local.role === "ADMIN" ) {
            icon = adminicon;
            adminLink = <a className="nav-link active textColor" href={"/Admin"}>Admin<span className="sr-only">(current)</span></a>
        }
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
                        <a className="nav-link active textColor" href={"/Clothes"}>Products<span className="sr-only">(current)</span></a>
                        <a className="nav-link active textColor" href={"/Cart"}>Cart<span className="sr-only">(current)</span></a>
                        <a className="nav-link active textColor" href={"/AboutUs"}>About<span className="sr-only">(current)</span></a>
                        {adminLink}
                        <div className="container-fluid textColor text-right">
                            <img src={icon} style={{width:30, height:30}} className="align-top" alt=""/> {local.username + "  "}
                            <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={handleLogOut}>Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
    else {
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
                    <a className="nav-link active textColor" href={"/Clothes"}>Products<span className="sr-only">(current)</span></a>
                    <a className="nav-link active textColor" href={"/Cart"}>Cart<span className="sr-only">(current)</span></a>
                    <a className="nav-link active textColor" href={"/AboutUs"}>About<span className="sr-only">(current)</span></a>
                    <form className="container-fluid  text-right">
                        <Link to="/SignUp" className="px-3"><button className="btn btn-outline-secondary my-2 my-sm-0"  type="button" placeholder="Login">Sign-up</button></Link>
                        <Link to={"/Login"}><button className="btn btn-outline-success my-2 my-sm-0" type="button" placeholder="Login">Log-in</button></Link>
                    </form>
                </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;