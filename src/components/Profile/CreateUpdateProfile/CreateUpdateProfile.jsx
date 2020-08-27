import React, { useState, Fragment, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';
import {
    createProfile,
    getCurrentProfile,
} from '../../../redux/actions/profile';

const CreateUpdateProfile = ({
    isEditing,
    createProfile,
    getCurrentProfile,
    profile: { profile },
}) => {
    const initialState = {
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: '',
    };

    const [formData, setFormData] = useReducer(
        (state, newState) => ({
            ...state,
            ...newState,
        }),
        initialState
    );
    const [isSocialVisible, setIsSocialVisible] = useState(false);

    useEffect(() => {
        if (isEditing) {
            getCurrentProfile();
            for (const key in formData) {
                if (key === 'skills') {
                    setFormData({
                        [key]: profile[key].join(','),
                    });
                } else if (
                    key === 'youtube' ||
                    key === 'facebook' ||
                    key === 'twitter' ||
                    key === 'linkedin' ||
                    key === 'instagram'
                ) {
                    setFormData({
                        [key]: profile.socialMedia[key]
                            ? profile.socialMedia[key]
                            : '',
                    });
                } else {
                    setFormData({ [key]: profile[key] ? profile[key] : '' });
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setFormData({ [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createProfile(formData, isEditing);
    };

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram,
    } = formData;
    return (
        <Fragment>
            <h1 className="large text-primary">Create Your Profile</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to
                make your profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                    <select
                        name="status"
                        value={status}
                        onChange={(event) => handleChange(event)}
                    >
                        <option value="0">* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">
                            Junior Developer
                        </option>
                        <option value="Senior Developer">
                            Senior Developer
                        </option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">
                            Student or Learning
                        </option>
                        <option value="Instructor">
                            Instructor or Teacher
                        </option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className="form-text">
                        Give us an idea of where you are at in your career
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Company"
                        name="company"
                        onChange={(event) => handleChange(event)}
                        value={company}
                    />
                    <small className="form-text">
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Website"
                        name="website"
                        onChange={(event) => handleChange(event)}
                        value={website}
                    />
                    <small className="form-text">
                        Could be your own or a company website
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        onChange={(event) => handleChange(event)}
                        value={location}
                    />
                    <small className="form-text">
                        City & state suggested (eg. Boston, MA)
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Skills"
                        name="skills"
                        onChange={(event) => handleChange(event)}
                        value={skills}
                    />
                    <small className="form-text">
                        Please use comma separated values (eg.
                        HTML,CSS,JavaScript,PHP)
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Github Username"
                        name="githubusername"
                        onChange={(event) => handleChange(event)}
                        value={githubusername}
                    />
                    <small className="form-text">
                        If you want your latest repos and a Github link, include
                        your username
                    </small>
                </div>
                <div className="form-group">
                    <textarea
                        placeholder="A short bio of yourself"
                        name="bio"
                        onChange={(event) => handleChange(event)}
                        value={bio}
                    ></textarea>
                    <small className="form-text">
                        Tell us a little about yourself
                    </small>
                </div>

                <div className="my-2">
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => setIsSocialVisible(!isSocialVisible)}
                    >
                        Add Social Network Links
                    </button>
                    <span>Optional</span>
                </div>
                {isSocialVisible && (
                    <Fragment>
                        <div className="form-group social-input">
                            <i className="fab fa-twitter fa-2x"></i>
                            <input
                                type="text"
                                placeholder="Twitter URL"
                                name="twitter"
                                onChange={(event) => handleChange(event)}
                                value={twitter}
                            />
                        </div>

                        <div className="form-group social-input">
                            <i className="fab fa-facebook fa-2x"></i>
                            <input
                                type="text"
                                placeholder="Facebook URL"
                                name="facebook"
                                onChange={(event) => handleChange(event)}
                                value={facebook}
                            />
                        </div>

                        <div className="form-group social-input">
                            <i className="fab fa-youtube fa-2x"></i>
                            <input
                                type="text"
                                placeholder="YouTube URL"
                                name="youtube"
                                onChange={(event) => handleChange(event)}
                                value={youtube}
                            />
                        </div>

                        <div className="form-group social-input">
                            <i className="fab fa-linkedin fa-2x"></i>
                            <input
                                type="text"
                                placeholder="Linkedin URL"
                                name="linkedin"
                                onChange={(event) => handleChange(event)}
                                value={linkedin}
                            />
                        </div>

                        <div className="form-group social-input">
                            <i className="fab fa-instagram fa-2x"></i>
                            <input
                                type="text"
                                placeholder="Instagram URL"
                                name="instagram"
                                onChange={(event) => handleChange(event)}
                                value={instagram}
                            />
                        </div>
                    </Fragment>
                )}
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to={routes.DASHBOARD}>
                    Go Back
                </Link>
            </form>
        </Fragment>
    );
};

CreateUpdateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func,
    isEditing: PropTypes.bool,
    profile: PropTypes.object,
};

const mapStateToProps = (state) => ({
    isEditing: state.profile.isEditing,
    profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    CreateUpdateProfile
);
