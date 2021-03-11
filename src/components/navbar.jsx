import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Navbar 
                    <span className="badge badge-pill badge-secondary m-2">
                        {this.props.totalCounter}
                    </span>
                </a>
            </nav>
        );
    }
}
 
export default Navbar;