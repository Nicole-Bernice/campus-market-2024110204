<template>
  <div v-if="loading" class="loading">数据加载中...</div>
</template>
<script setup lang="ts">
defineProps<{ loading: boolean }>()
</script>
<style scoped>
.loading {
  padding: 20px;
  text-align: center;
  color: #666;
}
</style>
