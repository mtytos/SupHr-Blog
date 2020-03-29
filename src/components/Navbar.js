import React from "react";
import {Link, NavLink, withRouter} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <span  className="brand-logo"> Superhero's Blog</span>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fakeapi">Fake API</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};

export default withRouter(Navbar);