import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { routes } from '../../routes';
import { setLogout } from '../../redux/actions/auth';

const Navbar = ({ isAuthenticated, setLogout }) => {
    const authorizedLinks = (
        <ul>
            <li>
                <Link to={routes.DASHBOARD}>
                    <i className="fas fa-user" />{' '}
                    <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to={routes.POSTS}>Posts</Link>
            </li>
            <li>
                <Link to={routes.PROFILES}>Developers</Link>
            </li>
            <li>
                <a href="#!" onClick={() => setLogout()}>
                    <i className="fas fa-sign-out-alt" />{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to={routes.PROFILES}>Developers</Link>
            </li>
            <li>
                <Link to={routes.REGISTER}>Register</Link>
            </li>
            <li>
                <Link to={routes.LOGIN}>Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to={!isAuthenticated ? routes.HOME : routes.DASHBOARD}>
                    <i className="fas fa-code"></i> Devs Social Network
                </Link>
            </h1>
            {isAuthenticated ? authorizedLinks : guestLinks}
        </nav>
    );
};

Navbar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    setLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setLogout })(Navbar);
