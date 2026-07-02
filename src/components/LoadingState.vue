<template>
  <div class="loading-wrap">
    <div class="loading-circle"></div>
    <p class="loading-text">数据获取中...</p>
  </div>
</template>

<style scoped>
.loading-wrap {
  text-align: center;
  padding: 40px 0;
  color: #666;
}
.loading-circle {
  width: 40px;
  height: 40px;
  border: 4px solid #eee;
  border-top: 4px solid #409eff;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
  margin: 0 auto 10px;
}
.loading-text {
  margin: 0;
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
