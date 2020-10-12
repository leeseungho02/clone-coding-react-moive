import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return <div className="navigation my-4 container d-flex">
        <NavLink to="/" activeClassName="active" exact>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
            Home
        </NavLink>
        <NavLink to="/about" activeClassName="active" exact>About</NavLink>
        <div className="nav__bar"></div>
    </div>;
}

export default Navigation;