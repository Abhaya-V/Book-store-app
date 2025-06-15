import axios from "axios"

const axiosInstance = axios.create({
    baseURL : "http://localhost:5000"
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    const accessToken = sessionStorage.getItem("token")
    if(accessToken){
        if(config){
            config.headers.token = accessToken
        }
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default axiosInstance