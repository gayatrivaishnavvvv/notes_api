import axios from 'axios';

// Create a configured Axios instance pointing to your Express backend
const API = axios.create({
  baseURL: 'http://localhost:3000/api/v1', // Matches your Express PORT and v1 route prefix
});

export default API;