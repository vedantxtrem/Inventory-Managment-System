import axios from 'axios';

// Base URL for API requests
const BASE_URL = "http://localhost:5050/api/v1";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // Include credentials in cross-origin requests
});

export default axiosInstance;