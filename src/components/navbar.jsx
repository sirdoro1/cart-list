import React, { Component } from 'react';

const Navbar = ({totalCounter}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Navbar 
                <span className="badge badge-pill badge-secondary m-2">
                    {totalCounter}
                </span>
            </a>
        </nav>
    );
}
 
export default Navbar;