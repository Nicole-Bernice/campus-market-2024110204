<template>
  <input
    v-model="keyword"
    placeholder="输入关键词搜索"
    @input="$emit('search', keyword)"
    class="search-input"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const keyword = ref('')
defineEmits(['search'])
</script>
<style scoped>
.search-input {
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 15px;
}
</style>
