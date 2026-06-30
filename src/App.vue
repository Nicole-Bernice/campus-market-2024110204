<template>
  <!-- 顶部全局导航，浅绿色背景 -->
  <div style="display:flex;gap:24px;padding:12px;background:#e7f6e7;border-bottom:1px solid #eee;">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/list">综合集市</RouterLink>
    <RouterLink to="/secondhand">闲置交易</RouterLink>
    <RouterLink to="/lost">失物招领</RouterLink>
    <RouterLink to="/group">拼单搭子</RouterLink>
    <RouterLink to="/errand">跑腿委托</RouterLink>
    <RouterLink to="/profile">个人中心</RouterLink>
    <RouterLink to="/publish">发布信息</RouterLink>
  </div>
  <router-view />
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
