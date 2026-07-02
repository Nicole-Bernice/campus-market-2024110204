<template>
  <div class="page">
    <h2>二手交易专区</h2>
    <!-- 搜索框 -->
    <SearchBar @search="handleSearch" />

    <!-- 加载状态 -->
    <LoadingState v-if="loading" />
    <!-- 错误状态，绑定重试事件 -->
    <ErrorState v-else-if="errMsg" @retry="loadData" />

    <div v-else>
      <div v-if="filterList.length > 0" style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:20px;">
        <ItemCard v-for="item in filterList" :key="item.id" :item="item" />
      </div>
      <EmptyState v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import EmptyState from '@/components/EmptyState.vue'
import SearchBar from '@/components/SearchBar.vue'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
import { getSecondHandApi } from '@/api/secondhand'

// 接口状态
const loading = ref(false)
const errMsg = ref('')
const searchKey = ref('')
const allList = ref([])

// 搜索过滤计算属性
const filterList = computed(() => {
  if (!searchKey.value) return allList.value
  return allList.value.filter(item => item.title.includes(searchKey.value))
})

// 接收搜索关键词
const handleSearch = (val) => {
  searchKey.value = val
}

// 加载商品数据（支持重试）
const loadData = async () => {
  loading.value = true
  errMsg.value = ''
  try {
    const res = await getSecondHandApi()
    allList.value = res
  } catch (e) {
    errMsg.value = '数据加载失败，请稍后重试'
    console.error('二手商品加载异常：', e)
  } finally {
    loading.value = false
  }
}

onMounted(loadData)
</script>

<style scoped>
.page {
  padding: 20px;
}
</style>
