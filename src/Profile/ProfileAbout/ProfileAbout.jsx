import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
    profile: {
        bio,
        skills,
        user: { name },
    },
}) => {
    const renderSkills = skills.map((skill, index) => (
        <div class="p-1" key={index}>
            <i class="fa fa-check"></i> {skill}
        </div>
    ));
    return (
        <div class="profile-about bg-light p-2">
            {bio && (
                <Fragment>
                    <h2 class="text-primary">{name}s Bio</h2>
                    <p>{bio}</p>
                </Fragment>
            )}

            <div class="line"></div>
            <h2 class="text-primary">Skill Set</h2>
            <div class="skills">{renderSkills}</div>
        </div>
    );
};

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
