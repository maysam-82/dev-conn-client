import React from 'react';

const Loading = ({ isLoading }) => {
    return isLoading ? <div>Loading...</div> : null;
};

const mapStateToProps = (state) => ({
    isLoading: state.loading,
});

export default connect(mapStateToProps)(Loading);
