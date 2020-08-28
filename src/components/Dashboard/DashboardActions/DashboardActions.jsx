import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';
import { setProfileStatus } from '../../../redux/actions/profile';
import history from '../../../history';

const DashboardActions = ({ setProfileStatus }) => {
    const handleClick = () => {
        setProfileStatus(true);
        history.push(routes.EDIT_PROFILE);
    };
    return (
        <div className="dash-buttons">
            <div className="btn btn-light" onClick={() => handleClick()}>
                <i className="fas fa-user-circle text-primary"></i> Edit Profile
            </div>
            <Link to={routes.ADD_EXPERIENCE} className="btn btn-light">
                <i className="fab fa-black-tie text-primary"></i> Add Experience
            </Link>
            <Link to="add-education" className="btn btn-light">
                <i className="fas fa-graduation-cap text-primary"></i> Add
                Education
            </Link>
        </div>
    );
};

DashboardActions.propTypes = {
    setProfileStatus: PropTypes.func.isRequired,
};

export default connect(null, { setProfileStatus })(DashboardActions);
