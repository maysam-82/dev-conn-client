import React, { Fragment, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../../redux/actions/profile';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';

const Education = ({ addEducation }) => {
    const initialState = {
        school: '',
        degree: '',
        fieldOfStudy: '',
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
        school,
        degree,
        fieldOfStudy,
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
        addEducation(formData);
    };
    return (
        <Fragment>
            <h1 className="large text-primary">Add Your EducationY</h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any school or
                bootcamp you have attented.
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* School or Bootcamp"
                        name="school"
                        required
                        value={school}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or certificate"
                        name="degree"
                        required
                        value={degree}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Field of Study"
                        name="fieldOfStudy"
                        value={fieldOfStudy}
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
                        placeholder="Program Description"
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

Education.propTypes = {
    addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(Education);
