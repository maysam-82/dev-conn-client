import actionTypes from './actionTypes';
import { getRandomId } from './utils';

export const setToast = (toastMessage, toastType, fadeOutTime = 3000) => (
    dispatch
) => {
    const toastId = getRandomId();
    dispatch({
        type: actionTypes.SET_TOAST,
        payload: {
            toastMessage,
            toastType,
            toastId,
        },
    });

    setTimeout(() => {
        dispatch({ type: actionTypes.REMOVE_TOAST, payload: toastId });
    }, fadeOutTime);
};
