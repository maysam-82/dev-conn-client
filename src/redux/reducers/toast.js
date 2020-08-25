import actionTypes from '../actions/actionTypes';

const initialState = [];

const toastReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_TOAST:
            return [...state, payload];
        case actionTypes.REMOVE_TOAST:
            return state.filter((toast) => toast.toastId !== payload);

        default:
            return state;
    }
};

export default toastReducer;
