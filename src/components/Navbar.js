import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";
class Navbar extends React.Component {


    render() {

        return (
            <nav>

                <header>
                    <img alt="logo" src="/assets/image/code.png"></img>
                    <h2>J. Woltz</h2>
                    <h3>Full Stack Web Developer</h3>
                </header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;