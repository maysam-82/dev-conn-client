import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to={routes.HOME}>
                    <i className="fas fa-code"></i> Devs Social Network
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to={routes.PROFILE}>Developers</Link>
                </li>
                <li>
                    <Link to={routes.REGISTER}>Register</Link>
                </li>
                <li>
                    <Link to={routes.LOGIN}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
