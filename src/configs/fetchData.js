import axios from 'axios';

export const BASE_URL = 'https://support-coffee.onrender.com/';

export const getData = (url, token) => {
   return axios.get(BASE_URL + url, {
      headers: { accessToken: token },
   });
};

export const postData = async (url, data, token) => {
   return await axios.post(BASE_URL + url, data, { headers: { accessToken: token } });
};
