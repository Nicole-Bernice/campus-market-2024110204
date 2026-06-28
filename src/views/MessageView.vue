<template>
  <div class="page-wrap">
    <h1>消息中心</h1>
    <div class="msg-list">
      <!-- 消息项 -->
      <el-card class="msg-item" v-for="item in msgList" :key="item.id">
        <div class="msg-top">
          <span class="msg-type">{{ item.type }}</span>
          <span class="msg-time">{{ item.time }}</span>
        </div>
        <h3 class="msg-title">{{ item.title }}</h3>
        <p class="msg-content">{{ item.content }}</p>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 模拟消息数据，可后续对接消息接口
const msgList = ref([
  {
    id: 1,
    type: '系统通知',
    time: '2026-06-28 10:20',
    title: '发布成功提醒',
    content: '你发布的【计算机全套专业教材】已成功上架校园集市，其他同学可以浏览咨询。'
  },
  {
    id: 2,
    type: '互动消息',
    time: '2026-06-28 14:15',
    title: '有人咨询你的商品',
    content: '有同学对你的二手教材发起咨询，快去商品列表查看详情并回复对方。'
  },
  {
    id: 3,
    type: '平台公告',
    time: '2026-06-27 09:00',
    title: '集市使用规范更新',
    content: '为保障交易安全，平台更新物品发布规则，禁止发布违规、违禁类商品，违者下架处理。'
  },
  {
    id: 4,
    type: '便民推送',
    time: '2026-06-27 16:42',
    title: '新增跑腿委托板块',
    content: '校园跑腿、代取快递功能正式上线，你可以发布跑腿需求，也可接单赚取小额酬劳。'
  }
])
</script>

<style scoped>
.page-wrap {
  min-height: 65vh;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
}
h1 {
  font-size: 42px;
  color: #1d2129;
  margin: 0 0 30px;
}
.msg-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.msg-item {
  padding: 10px 0;
}
.msg-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.msg-type {
  background: #e6f7ff;
  color: #1890ff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 14px;
}
.msg-time {
  color: #999;
  font-size: 14px;
}
.msg-title {
  font-size: 18px;
  margin: 0 0 8px;
  color: #222;
}
.msg-content {
  color: #666;
  margin: 0;
  line-height: 1.6;
}
</style>
