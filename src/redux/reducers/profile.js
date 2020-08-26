import actionTypes from '../actions/actionTypes';

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: false,
};

const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.GET_PROFILE_START:
            return { ...state, loading: true };
        case actionTypes.GET_PROFILE_SUCCESS:
            return { ...state, profile: payload, loading: false };
        case actionTypes.GET_PROFILE_FAIL:
            return { ...state, loading: false };
        case actionTypes.CLEAR_PROFILE:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
};

export default profileReducer;
