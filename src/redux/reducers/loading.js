import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoading: false,
};

const loadingReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case actionTypes.SET_LOADING:
            return { ...state, isLoading: true };
        case actionTypes.REMOVE_LOADING:
            return { ...state, isLoading: false };

        default:
            return state;
    }
};

export default loadingReducer;
