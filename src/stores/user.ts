import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({
    username: '校园集市用户',
    account: 'student001',
    isCertified: true
  }),
  getters: {
    getUserName: (state) => state.username,
    getAccount: (state) => state.account
  },
  actions: {}
})
