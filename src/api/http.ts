import axios from "axios"

const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
})

// 请求拦截器
http.interceptors.request.use(config => config)
// 响应拦截器，直接返回data
http.interceptors.response.use(res => res.data, err => Promise.reject(err))

export default http
