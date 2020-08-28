import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Experiences = ({ experiences }) => {
    const renderExperiences = experiences.map(
        ({ _id, company, title, from, to }) => (
            <tr key={_id}>
                <td>{company}</td>
                <td className="hide-sm">{title}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
                    {!to ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
                </td>
                <td>
                    <button className="btn btn-danger">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        )
    );
    return (
        <div>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{renderExperiences}</tbody>
            </table>
        </div>
    );
};

Experiences.propTypes = {
    experiences: PropTypes.array.isRequired,
};

export default Experiences;
