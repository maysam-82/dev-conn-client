import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteProfile } from '../../redux/actions/profile';
import { routes } from '../../routes';
import DashboardActions from './DashboardActions';
import Experiences from './Experiences/Experiences';
import Educations from './Educations/Educations';

const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile,
    deleteProfile,
}) => {
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
                <Fragment>
                    <DashboardActions />
                    <Experiences experiences={profile.experience} />
                    <Educations educations={profile.education} />
                    <div className="my-2">
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteProfile()}
                        >
                            <i className="fas fas-user-minus"></i> Delete
                            Account
                        </button>
                    </div>
                </Fragment>
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
    deleteProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteProfile })(
    Dashboard
);
