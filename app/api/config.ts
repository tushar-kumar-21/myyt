// api.js

import axios from 'axios';
// export const baseURL = 'https://designoweb.work/hollywoodhair/crm/api/';
export const baseURL = 'https://ytbackend-r3du.onrender.com/api/v1/';
// export const baseURL = 'http://13.48.218.147/crm/api/';
const createApiInstance = (customHeaders = {}) => {
  const instance = axios.create({
    baseURL,
    headers: {
      //  'Content-Type': 'application/json',
      ...customHeaders,
    },
  });

  instance.interceptors.request.use(
    (config) => {

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      //Loader.hide();
      return response.data;
    },
    (error) => {
      if (error.response) {
        const { status, data } = error.response;
        if (status === 401) {
          return Promise.reject('Unauthorized');
        }
        if (status === 404) {
          return Promise.reject('Resource not found');
        }
        return Promise.reject(data.error || 'An error occurred');
      } else if (error.request) {
        return Promise.reject('Network error');
      } else {
        return Promise.reject('An error occurred');
      }
    }
  );

  return instance;
};

export default createApiInstance;