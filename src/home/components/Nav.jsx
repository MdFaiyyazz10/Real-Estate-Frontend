import React from 'react';
import '../css/components/Nav.css';
import '../../index.css';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Nav() {
    return (
        <nav id='home_navbar' className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" id='nav-logo' to={"/"}>
                    <motion.img initial={{ x: "-100%" }} whileInView={{ x: 0 }} src="/img/logo.png" alt="" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse flex-grow text-center" id="navbarNav">
                    <ul className="navbar-nav mx-auto flex-nowrap">
                        <li className="nav-item"><NavLink className="nav-link nav_main" to={"/"}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link nav_main" to={"/about"}>About</NavLink></li>
                        <div className="dropdown nav-dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </button>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={"/commercial-plot"}>Commercial Plots</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"/residential-plot"}>Residential Plots</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"/farmhouse-plot"}>Farmhouse</NavLink></li>
                                <li><NavLink className="dropdown-item" to={"/agriculture-plot"}>Agriculture</NavLink></li>
                            </ul>
                        </div>
                        <li className="nav-item"><NavLink className="nav-link nav_main" to={"/project"}>Project</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link nav_main" to={"/gallery"}>Gallery</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link nav_main" to={"/blog"}>Blog</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link nav_main" to={"/contact"}>Contact</NavLink></li>
                    </ul>
                    <Link className="nav-link" to={"/customer-login"}>
                        <button className="customerlogin-btn"> Login </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
