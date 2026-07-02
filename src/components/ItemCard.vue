<template>
  <div style="border:1px solid #eee;padding:12px;border-radius:8px;margin:10px 0;max-width:500px;">
    <h3 style="margin:0 0 8px;">{{ item.title }}</h3>
    <p style="margin:4px 0;">描述：{{ item.desc }}</p>
    <p style="margin:4px 0;">发布人：{{ item.publisher }}</p>

    <!-- 不同类型专属字段 -->
    <p v-if="item.type === 'secondhand'" style="margin:4px 0;">分类：{{ item.category }}</p>
    <p v-if="item.type === 'group'" style="margin:4px 0;">目标人数：{{ item.targetCount }}</p>
    <p v-if="item.type === 'errand'" style="margin:4px 0;">酬劳：{{ item.reward }}</p>
    <p v-if="item.type === 'lost'" style="margin:4px 0;">类型：{{ item.type }}</p>

    <!-- 收藏按钮核心 -->
    <button
      @click="handleToggleFav(item.id)"
      style="margin-top:10px;padding:6px 14px;border:none;border-radius:4px;cursor:pointer;background:#409eff;color:#fff;"
    >
      {{ favStore.isFav(item.id) ? '已收藏' : '收藏' }}
    </button>
  </div>
</template>

<script setup lang="ts">
// 引入收藏仓库
import { useFavoriteStore } from '@/stores/favorite'

// 接收父组件传来的商品对象
const props = defineProps<{
  item: any
}>()

// 获取收藏实例
const favStore = useFavoriteStore()

// 切换收藏状态
const handleToggleFav = (id: string) => {
  favStore.toggleFav(id)
}
</script>
