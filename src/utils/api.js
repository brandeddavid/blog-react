/**
 * Network call file
 */

import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

/**
 * Function to get a list of all posts
 *
 * @returns {object} with a list of all post
 */
export const getPosts = () => {
  return axios
    .get(`${baseURL}/posts`)
    .then(response => {
      return { message: 'success', data: response.data };
    })
    .catch(error => {
      return { message: 'error', error: error.message };
    });
};

/**
 * Funtion to get individual posts
 *
 * @param {string} id
 *
 * @returns {object} with individual post info
 */
export const getPost = id => {
  return axios
    .get(`${baseURL}/posts/${id}`)
    .then(response => {
      return { message: 'success', data: response.data };
    })
    .catch(error => {
      return { message: 'error', error: error.message };
    });
};

/**
 * funtion to get user info
 *
 * @param {string} id
 *
 * @returns {object} with user info
 */
export const getUser = id => {
  return axios
    .get(`${baseURL}/users/${id}`)
    .then(response => {
      return { message: 'success', data: response.data };
    })
    .catch(error => {
      return { message: 'error', error: error.message };
    });
};
