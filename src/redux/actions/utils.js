const crypto = require('crypto');

// Created random string with length of 20.
export const getRandomId = () => {
    return crypto.randomBytes(20).toString('hex');
};
