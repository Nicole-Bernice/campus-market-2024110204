<template>
  <el-card class="mt-2" style="border-radius:8px;box-shadow:0 1px 6px #ddd;padding:10px;">
    <h3>{{ item.title }}</h3>
    <p>{{ item.desc }}</p>
  </el-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: {
    title: string
    desc: string
  }
}>()
</script>
