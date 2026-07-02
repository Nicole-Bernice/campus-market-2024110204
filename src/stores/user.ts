import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({
    loginUser: null
  }),
  actions: {
    // 登录存储用户
    setUser(user) {
      this.loginUser = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    // 刷新页面恢复登录
    recoverLogin() {
      const str = localStorage.getItem('user')
      if (str) this.loginUser = JSON.parse(str)
    },
    // 退出登录核心方法
    logout() {
      // 清空pinia内存用户
      this.loginUser = null
      // 删除本地持久化数据
      localStorage.removeItem('user')
    }
  }
})
