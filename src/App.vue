<template>
  <!-- 顶部全局导航，浅绿色背景 -->
  <div style="display:flex;gap:24px;padding:12px;background:#e7f6e7;border-bottom:1px solid #eee;align-items:center;">
    <RouterLink to="/home">首页</RouterLink>
    <RouterLink to="/board">综合集市</RouterLink>
    <RouterLink to="/secondhand">闲置交易</RouterLink>
    <RouterLink to="/lost">失物招领</RouterLink>
    <RouterLink to="/group">拼单搭子</RouterLink>
    <RouterLink to="/errand">跑腿委托</RouterLink>
    <RouterLink to="/profile">个人中心</RouterLink>
    <RouterLink to="/publishing">发布信息</RouterLink>

    <!-- 右侧登录状态区域 -->
    <div style="margin-left:auto;display:flex;gap:16px;align-items:center;">
      <template v-if="userStore.loginUser">
        <span>欢迎，{{ userStore.loginUser.username }}</span>
        <!-- 新增退出登录按钮 -->
        <button @click="handleLogout" style="padding:3px 10px;cursor:pointer;">退出登录</button>
      </template>
      <template v-else>
        <RouterLink to="/login">登录</RouterLink>
        <RouterLink to="/register">注册</RouterLink>
      </template>
    </div>
  </div>

  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink, useRouter } from "vue-router";
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
// 引入路由实现退出跳转
const router = useRouter()

onMounted(()=>{
  // 页面加载自动读取本地存储，恢复登录状态
  userStore.recoverLogin()
})

// 退出登录处理函数
const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}
</script>
