import axios from "axios";

const https = axios.create({
    baseURL: 'https://dilshodforever.uz'
})

https.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})
export default https