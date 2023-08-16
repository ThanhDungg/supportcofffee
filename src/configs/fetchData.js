import axios from 'axios';

export const BASE_URL = 'https://support-coffee.onrender.com/';

export const getData = (url, token) => {
   return axios.get(BASE_URL + url, {
      headers: { accessToken: token },
   });
};

export const postData = (url, data, token) => {
   return axios.post(BASE_URL + url, data, { headers: { accessToken: token } });
};

export const putData = (url, data, token) => {
   return axios.put(BASE_URL + url, data, { headers: { accessToken: token } });
};
