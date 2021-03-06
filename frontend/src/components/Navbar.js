import React from 'react';
import { NavLink } from 'react-router-dom';


const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="nav-link" exact to='/'>DanyNotes</NavLink>
        <button 
            className="navbar-toggler" 
            type="button" data-toggle="collapse" 
            data-target="#navbarTogglerDemo02" 
            aria-controls="navbarTogglerDemo02" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
                <li class="nav-item active">
                    <NavLink className="nav-link" exact to='/'>Home <span class="sr-only">(current)</span></NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" exact to='/Blog'>Blog</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default navbar;