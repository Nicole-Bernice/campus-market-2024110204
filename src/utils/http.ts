import axios from "axios";
// 后端mock地址
const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000
});
// 响应拦截，直接返回data
http.interceptors.response.use(res => res.data);
export default http;
