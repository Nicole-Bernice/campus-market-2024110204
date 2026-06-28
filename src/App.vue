<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav style="margin: 15px 0; font-size: 16px;">
      <router-link to="/home" style="margin-right: 14px;">首页</router-link>
      <router-link to="/list" style="margin-right: 14px;">信息列表</router-link>
      <router-link to="/detail" style="margin-right: 14px;">详情页</router-link>
      <router-link to="/publish" style="margin-right: 14px;">发布信息</router-link>
      <router-link to="/message" style="margin-right: 14px;">消息中心</router-link>
      <router-link to="/profile" style="margin-right: 14px;">个人中心</router-link>
      <router-link to="/board">数据看板</router-link>
    </nav>
    <!-- 页面渲染出口 -->
    <router-view />
  </div>
</template>
