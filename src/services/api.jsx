import axios from 'axios';

const api = axios.create({
  baseURL: 'http://13.233.29.34:5000/api/chat', // Change to your deployed backend URL later
});

export default api;