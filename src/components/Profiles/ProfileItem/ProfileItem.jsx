import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectProfile } from '../../../redux/actions/profile';

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        location,
        skills,
    },
    selectProfile,
}) => {
    const renderSkills =
        skills.length > 0
            ? skills.slice(0, 4).map((skill, index) => (
                  <li key={index} className="text-primary">
                      <i className="fas fa-check"></i> {skill}
                  </li>
              ))
            : null;
    return (
        <div className="profile bg-light">
            <img src={avatar} alt={name} className="round-img" />
            <div>
                <h2>{name}</h2>
                <p className="my-1">{status}</p>
                {company ? <p className="my-1">{company}</p> : null}
                {location ? <p className="my-1">{location}</p> : null}
                <button
                    onClick={() => selectProfile(_id)}
                    className="btn btn-primary"
                >
                    View Profile
                </button>
            </div>
            <ul>{renderSkills}</ul>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
    selectProfile: PropTypes.func.isRequired,
};

export default connect(null, { selectProfile })(ProfileItem);
