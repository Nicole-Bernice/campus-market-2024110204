<template>
  <div class="page">
    <h2>二手交易专区</h2>
    <div v-if="list.length > 0">
      <ItemCard v-for="item in list" :key="item.title" :item="item" />
    </div>
    <EmptyState v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getSecondHandApi } from "@/api/secondhand"
import ItemCard from "@/components/ItemCard.vue"
import EmptyState from "@/components/EmptyState.vue"

const list = ref([])
const loadData = async () => {
  list.value = await getSecondHandApi()
}
onMounted(loadData)
</script>

