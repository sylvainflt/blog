import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

api.withCredentials = true;

export default api;