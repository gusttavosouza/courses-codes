import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.100.101.83:3333'
})

export default api;