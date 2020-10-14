import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return <div className="navigation my-4 container d-flex">
        <div className="links">
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/about" activeClassName="active" exact>About</NavLink>
        </div>
    </div>;
}

export default Navigation;