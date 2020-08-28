import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Educations = ({ educations }) => {
    const renderEducations = educations.map(
        ({ _id, school, degree, from, to }) => (
            <tr key={_id}>
                <td>{school}</td>
                <td className="hide-sm">{degree}</td>
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
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Degree</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{renderEducations}</tbody>
            </table>
        </div>
    );
};

Educations.propTypes = {
    educations: PropTypes.array.isRequired,
};

export default Educations;
