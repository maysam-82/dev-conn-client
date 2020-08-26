import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
const Auth = ({ children, isAuthenticated }) => {
    return isAuthenticated ? <Fragment>{children}</Fragment> : null;
};

Auth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Auth);
