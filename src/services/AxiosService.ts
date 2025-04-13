import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
  params: { TOKEN: '' },
});

export default instance;
