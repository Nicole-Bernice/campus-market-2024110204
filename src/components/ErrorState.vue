<template>
  <div v-if="errMsg" class="error">{{ errMsg }}</div>
</template>
<script setup lang="ts">
defineProps<{ errMsg: string }>()
</script>
<style scoped>
.error {
  padding: 20px;
  text-align: center;
  color: red;
}
</style>
