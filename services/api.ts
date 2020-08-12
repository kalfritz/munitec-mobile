import axios from 'axios';

//replace this url with your ipv4 address (access it with ipconfig command on cmd)
const baseURL = 'http://192.168.43.177:3333';

const api = axios.create({
  baseURL,
});

export default api;
