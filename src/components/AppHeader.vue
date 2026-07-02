<template>
  <div class="header">
    <router-link to="/">首页</router-link>
    <router-link to="/secondhand">闲置交易</router-link>
    <router-link to="/lost">失物招领</router-link>
    <router-link to="/group">拼单搭子</router-link>
    <router-link to="/errand">跑腿委托</router-link>
    <router-link to="/publish">发布</router-link>
    <router-link to="/profile">个人中心</router-link>

    <!-- 未登录：登录/注册入口 -->
    <div v-if="!userStore.loginUser" class="login-box">
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>
    <!-- 已登录：用户名+退出按钮 -->
    <div v-else class="user-box">
      <span>欢迎 {{ userStore.loginUser.username }}</span>
      <button @click="handleLogout">退出登录</button>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

// 退出登录处理函数
const handleLogout = () => {
  // 清空登录状态与本地存储
  userStore.logout()
  // 跳转到登录页面
  router.push('/login')
}
</script>

<style scoped>
.header {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #f5f5f5;
  align-items: center;
}
a {
  text-decoration: none;
  color: #333;
}
.login-box, .user-box {
  margin-left: auto;
  display: flex;
  gap: 15px;
  align-items: center;
}
button {
  cursor: pointer;
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
}
</style>
