import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({
    loginUser: null
  }),
  actions: {
    // 登录保存用户
    setUser(user) {
      this.loginUser = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    // 退出登录清空
    logout() {
      this.loginUser = null
      localStorage.removeItem('user')
    },
    // 页面刷新恢复登录
    recoverLogin() {
      const str = localStorage.getItem('user')
      if(str) this.loginUser = JSON.parse(str)
    }
  }
})
