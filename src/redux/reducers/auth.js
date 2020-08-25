import actionTypes from '../actions/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
};

const authenticationReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.REGISTER_START:
            return { ...state, isLoading: true };
        case actionTypes.REGISTER_FAIL:
        case actionTypes.AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoading: false,
                token: null,
                isAuthenticated: false,
            };
        case actionTypes.REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isLoading: false,
                isAuthenticated: true,
            };
        case actionTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload,
            };

        default:
            return state;
    }
};

export default authenticationReducer;
