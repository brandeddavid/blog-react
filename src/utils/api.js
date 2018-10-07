import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

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

export const getPost = id => {
  return axios
    .get(`${baseURL}/posts/${id}`)
    .then(response => {
      return { message: 'success', data: response.data }
    })
    .catch(error => {
      return { message: 'error', data: error.message }
    })
}
