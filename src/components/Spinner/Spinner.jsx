import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ text }) => {
    return (
        <div className="spinner">
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            <div className="spinner-line"></div>
            {text ? <p>{text}</p> : null}
        </div>
    );
};

Spinner.propTypes = {
    text: PropTypes.string,
};

export default Spinner;
