import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfile } from '../redux/actions/profile';
import { routes } from '../routes';

const Profile = ({ userId, getProfile, profile, auth }) => {
    useEffect(() => {
        getProfile(userId);
    }, [getProfile, userId]);

    const renderProfileButtons = profile && (
        <Fragment>
            <Link to={routes.PROFILES} className="btn btn-light">
                Profiles
            </Link>
            {auth.isAuthenticated && auth.user._id === profile.user._id && (
                <Link to={routes.EDIT_PROFILE} className="btn btn-dark">
                    <i class="fas fa-edit"></i>
                </Link>
            )}
        </Fragment>
    );

    return <div>{renderProfileButtons}</div>;
};

Profile.propTypes = {
    userId: PropTypes.string.isRequired,
    getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    userId: state.profile.selectedProfileUserId,
    profile: state.profile.profile,
    auth: state.auth,
});

export default connect(mapStateToProps, { getProfile })(Profile);
