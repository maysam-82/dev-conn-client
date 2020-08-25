import React from 'react';

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

export default Spinner;
