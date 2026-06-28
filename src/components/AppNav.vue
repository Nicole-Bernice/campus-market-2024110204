<template>
  <div class="nav-bar">
    <router-link to="/home">首页</router-link>
    <router-link to="/list">商品列表</router-link>
    <router-link to="/board">数据看板</router-link>
    <router-link to="/publish">发布商品</router-link>
    <router-link to="/message">消息</router-link>
    <router-link to="/profile">个人中心</router-link>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 40px;
  background: #e6f7e6;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 20px;
}
.nav-bar a {
  text-decoration: none;
  color: #222;
  font-size: 16px;
  padding: 6px 14px;
  border-radius: 8px;
}
/* 路由激活自动高亮 */
.nav-bar a.router-link-active {
  background: #80c880;
  color: #fff;
}
</style>
