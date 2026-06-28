<template>
  <div class="page-wrap">
    <h1>个人中心</h1>

    <!-- 用户信息卡片 -->
    <el-card class="user-card">
      <div class="user-info">
        <div class="avatar">👤</div>
        <div class="info-text">
          <h2>校园集市用户</h2>
          <p>账号：student001 | 校园认证用户</p>
        </div>
      </div>
    </el-card>

    <!-- 数据统计卡片 -->
    <div class="stat-row">
      <el-card class="stat-item">
        <h2>{{ publishNum }}</h2>
        <p>我的发布</p>
      </el-card>
      <el-card class="stat-item">
        <h2>{{ msgNum }}</h2>
        <p>未读消息</p>
      </el-card>
      <el-card class="stat-item">
        <h2>{{ collectNum }}</h2>
        <p>我的收藏</p>
      </el-card>
    </div>

    <!-- 功能菜单 -->
    <el-card class="menu-card">
      <h3>我的功能</h3>
      <div class="menu-list">
        <div class="menu-item" @click="$router.push('/publish')">
          <span>📦</span>
          <span>发布商品</span>
        </div>
        <div class="menu-item" @click="$router.push('/list')">
          <span>📋</span>
          <span>我发布的帖子</span>
        </div>
        <div class="menu-item" @click="$router.push('/message')">
          <span>💬</span>
          <span>消息中心</span>
        </div>
        <div class="menu-item">
          <span>⚙️</span>
          <span>账号设置</span>
        </div>
        <div class="menu-item">
          <span>❓</span>
          <span>帮助与反馈</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 模拟个人数据
const publishNum = ref(4)
const msgNum = ref(2)
const collectNum = ref(3)
</script>

<style scoped>
.page-wrap {
  min-height: 65vh;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
}
h1 {
  font-size: 42px;
  color: #1d2129;
  margin: 0 0 30px;
}
.user-card {
  margin-bottom: 24px;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
}
.avatar {
  width: 80px;
  height: 80px;
  background: #e8f3ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}
.info-text h2 {
  margin: 0;
  font-size: 24px;
}
.info-text p {
  color: #666;
  margin: 6px 0 0;
}
.stat-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}
.stat-item h2 {
  font-size: 36px;
  color: #409eff;
  margin: 0;
}
.stat-item p {
  color: #666;
  margin: 8px 0 0;
}
.menu-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;
}
.menu-item {
  padding: 16px;
  background: #f7f8fa;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
}
.menu-item:hover {
  background: #e8f3ff;
}
.menu-item span:first-child {
  font-size: 24px;
  display: block;
  margin-bottom: 8px;
}
</style>
