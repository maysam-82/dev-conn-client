import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Toast = ({ toasts }) =>
    toasts &&
    toasts.length > 0 &&
    toasts.map(({ toastId, toastMessage, toastType }) => (
        <div key={toastId} className={`alert alert-${toastType}`}>
            {toastMessage}
        </div>
    ));

Toast.propTypes = {
    toasts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    toasts: state.toast,
});

export default connect(mapStateToProps)(Toast);
