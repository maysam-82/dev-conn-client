import axios from 'axios';

export const postData = async (url, data, config) => {
    const response = await axios.post(url, data, config);
    return response.data;
};
