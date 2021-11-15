import Axios from 'axios';
import { API_URL } from './constants';

export const $api = Axios.create({
  baseURL: API_URL, 
});


// $api.interceptors.request.use(
//   config => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//     return config;
//   }
// );

// $api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       localStorage.removeItem('token');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );
