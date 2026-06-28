<template>
  <div class="layout-wrap">
    <!-- 顶部导航 -->
    <AppNav />
    <!-- 页面内容出口 -->
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import AppNav from './AppNav.vue'
</script>

<style scoped>
.layout-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
}
.page-container {
  width: 100%;
}
</style>
