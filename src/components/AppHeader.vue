<template>
  <div class="page-header">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped>
.page-header {
  margin-bottom: 20px;
}
h2 {
  font-size: 28px;
  color: #111;
  margin: 0;
}
</style>
