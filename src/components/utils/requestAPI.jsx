import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bcsswp.azurewebsites.net',
});

const authen = localStorage.getItem('authen');

// Request interceptor
if (authen != null) {
    api.interceptors.request.use(
        function (config) {
            // Modify the request config here
            config.headers.Authorization = 'Bearer ' + authen;
            return config;
        },
        function (error) {
            // Handle request error here
            return Promise.reject(error);
        }
    );
}

// Response interceptor
api.interceptors.response.use(
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

export default api;
