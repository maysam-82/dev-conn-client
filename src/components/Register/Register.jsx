import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setToast } from '../../redux/actions/toast';
import { routes } from '../../routes';
import { errorMessage } from '../../fixtures/messages';
import toasTypes from '../../fixtures/toasTypes';

const Register = ({ setToast }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { name, email, password, confirmPassword } = formData;

    const handleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setToast(errorMessage.PASSWORDS_DO_NOT_MATCH, toasTypes.DANGER);
        } else {
            console.log(formData);
        }
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Create Your Account
            </p>
            <form className="form" onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={(event) => handleChange(event)}
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image,
                        use a Gravatar email
                    </small>
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
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        minLength="6"
                        value={confirmPassword}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Register"
                />
                <Link to={routes.HOME} className="btn btn-light">
                    Cancel
                </Link>
            </form>
            <p className="my-1">
                Already have an account? <Link to={routes.LOGIN}>Sign In</Link>
            </p>
        </Fragment>
    );
};

Register.propTypes = {
    setToast: PropTypes.func.isRequired,
};

export default connect(null, { setToast })(Register);
