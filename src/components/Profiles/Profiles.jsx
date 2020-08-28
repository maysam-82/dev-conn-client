import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../redux/actions/profile';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profiles }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    const renderProfiles =
        profiles.length > 0 ? (
            profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
            ))
        ) : (
            <h4>No profiles found</h4>
        );

    return (
        <Fragment>
            <h1 className="large text-primary">Developers</h1>
            <p className="lead">
                <i className="fab fa-connectdevelop"></i>
                Browse and connect with developers
            </p>
            <div className="profiles">{renderProfiles}</div>
        </Fragment>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.array,
};

const mapStateToProps = (state) => ({
    profiles: state.profile.profiles,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
