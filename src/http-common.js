import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://api.github.com/`,
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
})