import actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    post: null,
    laoding: false,
    error: {},
};

const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.GET_POSTS_START:
            return { ...state, loading: true };
        case actionTypes.GET_POSTS_FAIL:
            return { ...state, ...initialState };
        case actionTypes.GET_POSTS_SUCCESS:
            return { ...state, posts: payload, loading: false };

        default:
            return state;
    }
};

export default postsReducer;
