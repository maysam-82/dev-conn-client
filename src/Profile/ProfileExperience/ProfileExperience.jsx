import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ experiences }) => {
    const renderExperiences =
        experiences.length > 0 ? (
            <Fragment>
                {experiences.map(
                    ({ company, title, from, to, description, _id }) => (
                        <div key={_id}>
                            <h3 className="text-dark">{company}</h3>
                            <p>
                                <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
                                {!to ? (
                                    ' Now'
                                ) : (
                                    <Moment format="YYYY/MM/DD">{to}</Moment>
                                )}
                            </p>
                            <p>
                                <strong>Position: </strong> {title}
                            </p>
                            <p>
                                <strong>Description: </strong> {description}
                            </p>
                        </div>
                    )
                )}
            </Fragment>
        ) : (
            <h4>There is no experience.</h4>
        );
    return (
        <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Experiences</h2>
            {renderExperiences}
        </div>
    );
};

ProfileExperience.propTypes = {
    experiences: PropTypes.array.isRequired,
};

export default ProfileExperience;
