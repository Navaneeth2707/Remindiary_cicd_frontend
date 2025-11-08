import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ip:5000/api/chat', // Change to your deployed backend URL later
});

export default api;