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
        case actionTypes.UPDATE_LIKES_START:
            return { ...state, loading: true };
        case actionTypes.GET_POSTS_FAIL:
            return { ...state, ...initialState };
        case actionTypes.UPDATE_LIKES_FAIL:
            return { ...state, loading: false };
        case actionTypes.GET_POSTS_SUCCESS:
            return { ...state, posts: payload, loading: false };
        case actionTypes.UPDATE_LIKES_SUCCESS:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === payload.postId
                        ? { ...post, likes: payload.likes }
                        : post
                ),
                loading: false,
            };
        default:
            return state;
    }
};

export default postsReducer;
