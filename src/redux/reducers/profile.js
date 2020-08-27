import actionTypes from '../actions/actionTypes';

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: false,
    isEditing: false,
};

const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.GET_PROFILE_START:
        case actionTypes.CREATE_PROFILE_START:
            return { ...state, loading: true };
        case actionTypes.GET_PROFILE_SUCCESS:
        case actionTypes.CREATE_PROFILE_SUCCESS:
            return { ...state, profile: payload, loading: false };
        case actionTypes.GET_PROFILE_FAIL:
        case actionTypes.CREATE_PROFILE_FAIL:
            return { ...state, loading: false };
        case actionTypes.CLEAR_PROFILE:
            return {
                ...state,
                ...initialState,
            };
        case actionTypes.SET_PROFILE_STATUS:
            return {
                ...state,
                isEditing: payload,
            };
        default:
            return state;
    }
};

export default profileReducer;
