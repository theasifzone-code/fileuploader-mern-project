import axios from "axios";

// instance
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

// Request Interceptor (Token attach)
api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=> Promise.reject(error)
)

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error)=>{
        if(error.response?.status === 401){
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        return Promise.reject(error)
    }
)

export default api;