import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';

const Loading = ({ isLoading }) => {
    return isLoading ? (
        <div className="loading">
            <Spinner />
        </div>
    ) : null;
};

const mapStateToProps = (state) => ({
    isLoading: state.loading.isLoading,
});

export default connect(mapStateToProps)(Loading);
