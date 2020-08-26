import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../redux/actions/profile';
import { routes } from '../../routes';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return user ? (
        <Fragment>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            {profile ? (
                <div>Profile</div>
            ) : (
                <Fragment>
                    <p>You have not yet setup profile</p>
                    <Link
                        to={routes.CREATE_PROFILE}
                        className="btn btn-primary my-1"
                    >
                        Create Profile
                    </Link>
                </Fragment>
            )}
        </Fragment>
    ) : null;
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
