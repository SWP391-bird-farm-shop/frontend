import axios from 'axios';

// Request interceptor
axios.interceptors.request.use(
    function (config) {
        // Modify the request config here
        config.headers.Authorization = 'Bearer your_token';
        return config;
    },
    function (error) {
        // Handle request error here
        return Promise.reject(error);
    }
);

// Response interceptor
axios.interceptors.response.use(
    function (response) {
        // Modify the response data here
        response.data = response.data.data;
        return response;
    },
    function (error) {
        // Handle response error here
        return Promise.reject(error);
    }
);

export default axios;
