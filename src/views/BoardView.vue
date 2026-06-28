<template>
  <div class="page-wrap">
    <h1>数据看板</h1>
    <!-- 顶部统计卡片 -->
    <div class="stat-row">
      <el-card class="stat-card">
        <h2>{{ total }}</h2>
        <p>全部帖子总数</p>
      </el-card>
      <el-card class="stat-card">
        <h2>{{ secondhandNum }}</h2>
        <p>闲置交易</p>
      </el-card>
      <el-card class="stat-card">
        <h2>{{ lostNum }}</h2>
        <p>失物招领</p>
      </el-card>
      <el-card class="stat-card">
        <h2>{{ serviceNum }}</h2>
        <p>便民服务(拼单+跑腿)</p>
      </el-card>
    </div>

    <!-- 文字统计表格 -->
    <el-card style="margin-top:30px;">
      <h3>分类明细统计</h3>
      <p>闲置交易：{{ secondhandNum }} 条</p>
      <p>失物招领：{{ lostNum }} 条</p>
      <p>拼单搭子：{{ groupNum }} 条</p>
      <p>跑腿委托：{{ errandNum }} 条</p>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllItems } from '@/api/item'

// 统计变量
const total = ref(0)
const secondhandNum = ref(0)
const lostNum = ref(0)
const groupNum = ref(0)
const errandNum = ref(0)
const serviceNum = ref(0)

// 请求接口统计数据
const getStat = async () => {
  const res = await getAllItems()
  const list = res.data
  total.value = list.length
  list.forEach(item => {
    if (item.type === 'secondhand') secondhandNum.value++
    if (item.type === 'lostfound') lostNum.value++
    if (item.type === 'group') groupNum.value++
    if (item.type === 'errand') errandNum.value++
  })
  serviceNum.value = groupNum.value + errandNum.value
}

onMounted(getStat)
</script>

<style scoped>
.page-wrap {
  min-height: 65vh;
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
}
h1 {
  font-size: 42px;
  color: #1d2129;
  margin: 0 0 30px;
}
.stat-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.stat-card h2 {
  font-size: 36px;
  color: #409eff;
  margin: 0;
}
.stat-card p {
  color: #666;
  margin: 8px 0 0;
}
</style>
