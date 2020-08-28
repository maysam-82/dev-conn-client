import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({ educations }) => {
    const renderEducations =
        educations.length > 0 ? (
            <Fragment>
                {educations.map(
                    ({
                        school,
                        degree,
                        filedOfStudy,
                        from,
                        to,
                        description,
                        _id,
                    }) => (
                        <div key={_id}>
                            <h3 className="text-dark">{school}</h3>
                            <p>
                                <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
                                {!to ? (
                                    ' Now'
                                ) : (
                                    <Moment format="YYYY/MM/DD">{to}</Moment>
                                )}
                            </p>
                            <p>
                                <strong>Degree: </strong> {degree}
                            </p>
                            <p>
                                <strong>Field of Study: </strong> {filedOfStudy}
                            </p>
                            <p>
                                <strong>Description: </strong> {description}
                            </p>
                        </div>
                    )
                )}
            </Fragment>
        ) : (
            <h4>There is no education.</h4>
        );
    return (
        <div className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>
            {renderEducations}
        </div>
    );
};

ProfileEducation.propTypes = {
    educations: PropTypes.array.isRequired,
};

export default ProfileEducation;
