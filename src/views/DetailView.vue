<template>
  <div class="page-wrap">
    <h1>商品详情</h1>
    <div v-if="detail" class="mt-6">
      <h2 class="text-2xl font-bold">{{ detail.title }}</h2>
      <el-tag class="mt-2">{{ detail.type }}</el-tag>
      <p class="mt-4 text-gray-700">{{ detail.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getItemById } from '@/api/item'
const route = useRoute()
const detail = ref(null)

const loadDetail = async () => {
  const id = Number(route.query.id)
  const res = await getItemById(id)
  detail.value = res.data
}
onMounted(loadDetail)
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
  margin: 0 0 20px;
}
</style>
