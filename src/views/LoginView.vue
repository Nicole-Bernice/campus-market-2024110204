<template>
  <div class="login">
    <h2>用户登录</h2>
    <input v-model="form.username" placeholder="用户名"/>
    <input v-model="form.pwd" type="password" placeholder="密码"/>
    <button @click="handleLogin">登录</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getUserByName } from '@/api/user'
import { useUserStore } from '@/stores/user'
const router = useRouter()
const userStore = useUserStore()
const form = ref({username:'', pwd:''})

async function handleLogin() {
  const res = await getUserByName(form.value.username)
  const user = res.data[0]
  if(!user || user.pwd !== form.value.pwd) {
    alert('账号或密码错误')
    return
  }
  userStore.setUser(user)
  router.push('/')
}
</script>
