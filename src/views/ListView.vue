<template>
  <div class="page-wrap">
    <div class="list-header">
      <h1>集市信息列表</h1>
      <el-radio-group v-model="typeFilter" size="large">
        <el-radio label="">全部</el-radio>
        <el-radio label="secondhand">闲置交易</el-radio>
        <el-radio label="lostfound">失物招领</el-radio>
        <el-radio label="group">拼单搭子</el-radio>
        <el-radio label="errand">跑腿委托</el-radio>
      </el-radio-group>
    </div>
    <div class="card-grid">
    <div v-if="itemList.length === 0" class="empty-tip">
      暂无对应分类的集市帖子
    </div>
      <el-card v-for="item in itemList" :key="item.id" shadow="hover">
        <img v-if="item.img" :src="item.img" class="card-img" />
        <h3>{{ item.title }}</h3>
        <el-tag class="mt-2">{{ item.type }}</el-tag>
        <p class="text-gray-600 mt-2">{{ item.desc }}</p>
        <el-button text class="mt-3" @click="$router.push(`/detail?id=${item.id}`)">查看详情</el-button>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { getAllItems, getItemsByType } from '@/api/item'

const typeFilter = ref('')
const itemList = ref([])

const loadData = async () => {
  let res
  if (typeFilter.value) {
    res = await getItemsByType(typeFilter.value)
  } else {
    res = await getAllItems()
  }
  itemList.value = res
}

watch(typeFilter, loadData)
onMounted(loadData)
</script>

<style scoped>
.page-wrap {
  min-height: 65vh;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
}
.list-header {
  margin-bottom: 40px;
}
h1 {
  font-size: 42px;
  color: #1d2129;
  margin-top: 0;
  margin-bottom: 24px;
}
.el-radio-group {
  display: flex;
  gap: 32px;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 30px;
}
.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}
.empty-tip {
  text-align: center;
  font-size: 18px;
  color: #999;
  padding: 60px 0;
}
</style>
