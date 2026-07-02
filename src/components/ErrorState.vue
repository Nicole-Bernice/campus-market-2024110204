<template>
  <div class="error-wrap">
    <div class="error-icon">!</div>
    <p class="error-tip">加载失败，请重试</p>
    <button class="retry-btn" @click="$emit('retry')">重试</button>
  </div>
</template>

<script setup>
defineEmits(['retry'])
</script>

<style scoped>
.error-wrap {
  text-align: center;
  padding: 40px 0;
  color: #666;
}
.error-icon {
  font-size: 48px;
  color: #f56c6c;
  font-weight: bold;
}
.error-tip {
  margin: 8px 0;
}
.retry-btn {
  padding: 4px 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
}
</style>
