import axios from 'axios';

export const postData = async (url, data, config) => {
    const response = await axios.post(url, data, config);
    return response.data;
};

export const getData = async (url, data, config) => {
    const response = await axios.get(url, data, config);
    return response.data;
};

export const updateData = async (url, data, config) => {
    const response = await axios.put(url, data, config);
    return response.data;
};

export const deleteData = async (url) => {
    const response = await axios.delete(url);
    return response.data;
};

// Function which get a token. If there is a token, it will be added to headers
// Otherwise it will deleted from headers
export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers['x-auth-token'];
    }
};
