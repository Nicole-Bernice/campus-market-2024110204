<template>
  <div class="page">
    <h2>二手交易专区</h2>
    <!-- 搜索框 -->
    <SearchBar @search="handleSearch" />
    <!-- 加载提示 -->
    <LoadingState :loading="loading" />
    <!-- 错误提示 -->
    <ErrorState :errMsg="errMsg" />

    <div v-if="!loading && !errMsg">
      <div v-if="filterList.length > 0">
        <ItemCard v-for="item in filterList" :key="item.id" :item="item" />
      </div>
      <EmptyState v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import EmptyState from '@/components/EmptyState.vue'
import SearchBar from '@/components/SearchBar.vue'
import LoadingState from '@/components/LoadingState.vue'
import ErrorState from '@/components/ErrorState.vue'
import { getSecondHandApi } from '@/api/secondhand'

// 新增状态
const loading = ref(false)
const errMsg = ref('')
const searchKey = ref('')
const allList = ref([])

// 搜索过滤列表
const filterList = computed(() => {
  if (!searchKey.value) return allList.value
  return allList.value.filter(item => item.title.includes(searchKey.value))
})

// 接收搜索输入
const handleSearch = (val: string) => {
  searchKey.value = val
}

// 加载数据（带加载、异常捕获）
const loadData = async () => {
  loading.value = true
  errMsg.value = ''
  try {
    const res = await getSecondHandApi()
    allList.value = res
  } catch (e) {
    errMsg.value = '数据加载失败，请稍后重试'
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
