import axios from 'axios';

// Base URL for API requests
const BASE_URL = "https://ims-1urn.onrender.com/api/v1/";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // Include credentials in cross-origin requests
});

export default axiosInstance;