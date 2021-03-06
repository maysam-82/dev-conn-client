import actionTypes from './actionTypes';
import { setToast } from './toast';
import {
    getData,
    updateData,
    deleteData,
    postData,
} from '../../services/api/fetchApi';
import { setLoading, removeLoading } from './loading';
import { errorMessage, successMessage } from '../../fixtures/messages';
import history from '../../history';
import { routes } from '../../routes';

// Get posts
export const getPosts = () => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.GET_POSTS_START });
    try {
        const data = await getData('/api/posts');
        dispatch({ type: actionTypes.GET_POSTS_SUCCESS, payload: data });
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({
            type: actionTypes.GET_POSTS_FAIL,
        });
    }
};

// Add like
export const addLike = (postId) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_LIKES_START });
    try {
        const data = await updateData(`/api/posts/like/${postId}`);
        dispatch({
            type: actionTypes.UPDATE_LIKES_SUCCESS,
            payload: { postId, likes: data },
        });
    } catch (error) {
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({
            type: actionTypes.UPDATE_LIKES_FAIL,
        });
    }
};

// Remove like
export const removeLike = (postId) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_LIKES_START });
    try {
        const data = await updateData(`/api/posts/unlike/${postId}`);
        dispatch({
            type: actionTypes.UPDATE_LIKES_SUCCESS,
            payload: { postId, likes: data },
        });
    } catch (error) {
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({
            type: actionTypes.UPDATE_LIKES_FAIL,
        });
    }
};

// delete post
export const deletePost = (postId) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.DELETE_POST_START });
    try {
        await deleteData(`/api/posts/${postId}`);
        dispatch({
            type: actionTypes.DELETE_POST_SUCCESS,
            payload: postId,
        });
        dispatch(setToast(successMessage.POST_DELETED, 'success'));
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({
            type: actionTypes.DELETE_POST_FAIL,
        });
    }
};

// add post
export const addPost = (postFormData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    dispatch(setLoading());
    dispatch({ type: actionTypes.ADD_POST_START });
    try {
        const data = await postData(`/api/posts`, postFormData, config);
        dispatch({
            type: actionTypes.ADD_POST_SUCCESS,
            payload: data,
        });
        dispatch(setToast(successMessage.POST_CREATED, 'success'));
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({
            type: actionTypes.ADD_POST_FAIL,
        });
    }
};

// Get post
export const getPost = (postId) => async (dispatch) => {
    if (!postId) {
        history.push(routes.DASHBOARD);
        return;
    }
    dispatch(setLoading());
    dispatch({ type: actionTypes.GET_POST_START });
    try {
        const data = await getData(`/api/posts/${postId}`);
        dispatch({ type: actionTypes.GET_POST_SUCCESS, payload: data });
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({
            type: actionTypes.GET_POST_FAIL,
        });
    }
};

// select post
export const selectPost = (postId) => (dispatch) => {
    dispatch({ type: actionTypes.SELECT_POST, payload: postId });
    history.push(routes.POST);
};

// add comment
export const addComment = (commentData, postId) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    dispatch(setLoading());
    dispatch({ type: actionTypes.ADD_COMMENT_START });
    try {
        const data = await postData(
            `/api/posts/comment/${postId}`,
            commentData,
            config
        );
        dispatch({
            type: actionTypes.ADD_COMMENT_SUCCESS,
            payload: data,
        });
        dispatch(setToast(successMessage.COMMENT_ADDED, 'success'));
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({
            type: actionTypes.ADD_COMMENT_FAIL,
        });
    }
};

// Delete comment
export const deleteComment = (commentId, postId) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.REMOVE_COMMENT_START });
    try {
        await deleteData(`/api/posts/comment/${postId}/${commentId}`);
        dispatch({
            type: actionTypes.REMOVE_COMMENT_SUCCESS,
            payload: commentId,
        });
        dispatch(setToast(successMessage.COMMENT_DELETED, 'success'));
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({
            type: actionTypes.REMOVE_COMMENT_FAIL,
        });
    }
};
