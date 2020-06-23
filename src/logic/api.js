import axios from 'axios';

/**
 * Get API base
 */
export const API = () => axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

export default API;
