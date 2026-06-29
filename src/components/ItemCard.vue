<template>
  <div class="item-card">
    <h3>{{ item.title }}</h3>
    <p>校区：{{ item.campus }}</p>
    <p>状态：{{ item.status }}</p>
    <p v-if="item.price">价格：{{ item.price }}元</p>
    <p v-if="item.reward">酬劳：{{ item.reward }}元</p>
    <p>{{ item.desc }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
const props = defineProps({
  item: Object
})
</script>

<style scoped>
.item-card {
  border: 1px solid #eee;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
