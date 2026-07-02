import axios from 'axios'
const baseUrl = 'http://localhost:3000/users'

// 注册用户
export function registerUser(data: {username:string, pwd:string}) {
  return axios.post(baseUrl, data)
}

// 根据用户名查询用户（登录校验）
export function getUserByName(name:string) {
  return axios.get(`${baseUrl}?username=${name}`)
}
