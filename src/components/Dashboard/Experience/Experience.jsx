import React, { Fragment, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../../redux/actions/profile';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';

const Experience = ({ addExperience }) => {
    const initialState = {
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
    };

    const [isToDateDisabled, setIsToDateDisabled] = useState(false);

    const [formData, setFormData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        initialState
    );

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description,
    } = formData;

    const handleChange = ({ target: { name, value } }) => {
        setFormData({ [name]: value });
    };

    const handleCurrentChange = () => {
        setFormData({ current: !current, to: '' });
        setIsToDateDisabled(!isToDateDisabled);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addExperience(formData);
    };
    return (
        <Fragment>
            <h1 className="large text-primary">Add An Experience</h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any
                developer/programming positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Job Title"
                        name="title"
                        required
                        value={title}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Company"
                        name="company"
                        required
                        value={company}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={location}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>

                    <input
                        type="date"
                        name="from"
                        value={from}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="form-group">
                    <p>
                        <input
                            type="checkbox"
                            name="current"
                            value={current}
                            onChange={() => handleCurrentChange()}
                            checked={current}
                        />{' '}
                        Current Job
                    </p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input
                        type="date"
                        name="to"
                        value={to}
                        onChange={(event) => handleChange(event)}
                        disabled={isToDateDisabled ? 'disabled' : ''}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Job Description"
                        value={description}
                        onChange={(event) => handleChange(event)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to={routes.DASHBOARD}>
                    Go Back
                </Link>
            </form>
        </Fragment>
    );
};

Experience.propTypes = {
    addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(Experience);
