<template>
  <div class="register">
    <h2>用户注册</h2>
    <input v-model="form.username" placeholder="用户名"/>
    <input v-model="form.pwd" type="password" placeholder="密码"/>
    <button @click="handleRegister">注册</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser } from '@/api/user'
const router = useRouter()
const form = ref({username:'', pwd:''})

async function handleRegister() {
  await registerUser(form.value)
  alert('注册成功，请登录')
  router.push('/login')
}
</script>
