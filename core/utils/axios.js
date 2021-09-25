import axios from 'axios';

// eslint-disable-next-line prefer-destructuring
const env = process.env;

const settings = {
  baseURL: env.VUE_APP_API_URL,
  withCredentials: false,
};

const instance = axios.create(settings);

export default instance;
