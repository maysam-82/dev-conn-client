import actionTypes from '../actions/actionTypes';

const initialState = {
    posts: [],
    post: null,
    laoding: false,
    error: {},
    selectedPostId: '',
};

const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.GET_POSTS_START:
        case actionTypes.GET_POST_START:
        case actionTypes.UPDATE_LIKES_START:
        case actionTypes.DELETE_POST_START:
        case actionTypes.ADD_POST_START:
            return { ...state, loading: true };
        case actionTypes.GET_POSTS_FAIL:
            return { ...state, ...initialState };
        case actionTypes.GET_POST_FAIL:
            return { ...state, post: null };
        case actionTypes.UPDATE_LIKES_FAIL:
        case actionTypes.DELETE_POST_FAIL:
        case actionTypes.ADD_POST_FAIL:
            return { ...state, loading: false };
        case actionTypes.GET_POSTS_SUCCESS:
            return { ...state, posts: payload, loading: false };
        case actionTypes.GET_POST_SUCCESS:
            return { ...state, post: payload, loading: false };
        case actionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false,
            };
        case actionTypes.DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== payload),
                loading: false,
            };

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
        case actionTypes.SELECT_POST:
            return {
                ...state,
                selectedPostId: payload,
            };
        default:
            return state;
    }
};

export default postsReducer;
