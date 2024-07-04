import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://server-f1u8.onrender.com'
});

export default axiosInstance;