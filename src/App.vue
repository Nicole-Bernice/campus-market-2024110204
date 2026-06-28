<template>
  <!-- 全局统一布局，所有页面共用导航 -->
  <AppLayout />
</template>

<script setup>
import AppLayout from './components/AppLayout.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f7f8fa;
}
</style>
