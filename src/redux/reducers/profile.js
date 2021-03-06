import actionTypes from '../actions/actionTypes';

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: false,
    isEditing: false,
    selectedProfileUserId: '',
};

const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.GET_PROFILE_START:
        case actionTypes.GET_PROFILES_START:
        case actionTypes.CREATE_PROFILE_START:
        case actionTypes.ADD_EXPERIENCE_START:
        case actionTypes.ADD_EDUCATION_START:
        case actionTypes.DELETE_EXPERIENCE_START:
        case actionTypes.DELETE_EDUCATION_START:
        case actionTypes.DELETE_ACCOUNT_START:
            return { ...state, loading: true };

        case actionTypes.GET_PROFILE_SUCCESS:
        case actionTypes.ADD_EXPERIENCE_SUCCESS:
        case actionTypes.ADD_EDUCATION_SUCCESS:
        case actionTypes.DELETE_EDUCATION_SUCCESS:
        case actionTypes.DELETE_EXPERIENCE_SUCCESS:
            return { ...state, profile: payload, loading: false };

        case actionTypes.CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                profile: payload,
                loading: false,
                isEditing: false,
            };

        case actionTypes.GET_PROFILE_FAIL:
        case actionTypes.GET_PROFILES_FAIL:
        case actionTypes.CREATE_PROFILE_FAIL:
        case actionTypes.ADD_EXPERIENCE_FAIL:
        case actionTypes.ADD_EDUCATION_FAIL:
        case actionTypes.DELETE_ACCOUNT_FAIL:
        case actionTypes.DELETE_EXPERIENCE_FAIL:
        case actionTypes.DELETE_EDUCATION_FAIL:
            return { ...state, loading: false, profile: null };

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

        case actionTypes.GET_PROFILES_SUCCESS:
            return {
                ...state,
                profiles: payload,
                loading: false,
            };

        case actionTypes.SELECT_PROFILE:
            return {
                ...state,
                selectedProfileUserId: payload,
                isEditing: true,
            };
        default:
            return state;
    }
};

export default profileReducer;
