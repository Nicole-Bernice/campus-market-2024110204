<template>
  <div class="page">
    <h2>失物招领专区</h2>
    <div v-if="list.length > 0">
      <ItemCard v-for="item in list" :key="item.title" :item="item" />
    </div>
    <EmptyState v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getLostApi } from "@/api/lost"
import ItemCard from "@/components/ItemCard.vue"
import EmptyState from "@/components/EmptyState.vue"

const list = ref([])
const loadData = async () => {
  list.value = await getLostApi()
}
onMounted(loadData)
</script>
