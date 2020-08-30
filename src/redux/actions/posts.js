import actionTypes from './actionTypes';
import { setToast } from './toast';
import { getData, updateData, deleteData } from '../../services/api/fetchApi';
import { setLoading, removeLoading } from './loading';
import { errorMessage, successMessage } from '../../fixtures/messages';

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
    dispatch({ type: actionTypes.DELETE_POST_START });
    try {
        await deleteData(`/api/posts/${postId}`);
        dispatch({
            type: actionTypes.DELETE_POST_SUCCESS,
            payload: postId,
        });
        dispatch(setToast(successMessage.POST_DELETED, 'success'));
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
            type: actionTypes.DELETE_POST_FAIL,
        });
    }
};
