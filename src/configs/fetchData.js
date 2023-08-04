import axios from 'axios';

const BASE_URL = 'https://ptit-social-app.onrender.com/';

export const getData = async (url, token) => {
   const res = await axios.get(BASE_URL + url, {
      headers: { accessToken: token },
   });
   return res;
};

export const postData = async (url, data, token) => {
   const res = await axios.post(
      BASE_URL + url,
      {
         data,
      },
      { headers: { accessToken: token } },
   );
};
