import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { routes } from '../../routes';
import { setLogin } from '../../redux/actions/auth';

const Login = ({ setLogin, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    if (isAuthenticated) return <Redirect to={routes.DASHBOARD} />;

    const { email, password } = formData;

    const handleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLogin(email, password);
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Sign Into Your Account
            </p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />
                <Link to={routes.HOME} className="btn btn-light">
                    Cancel
                </Link>
            </form>
            <p className="my-1">
                Don't have an account? <Link to={routes.REGISTER}>Sign Up</Link>
            </p>
        </Fragment>
    );
};

Login.propTypes = {
    setLogin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setLogin })(Login);
