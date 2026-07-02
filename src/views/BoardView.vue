<template>
  <div style="padding:20px;">
    <h1>数据看板</h1>
    <div style="display:flex;gap:40px;margin:40px 0;">
      <div>
        <p style="font-size:40px;color:#409eff;margin:0;">{{ totalCount }}</p>
        <p>全部帖子总数</p>
      </div>
      <div>
        <p style="font-size:40px;color:#409eff;margin:0;">{{ secondhandCount }}</p>
        <p>闲置交易</p>
      </div>
      <div>
        <p style="font-size:40px;color:#409eff;margin:0;">{{ lostCount }}</p>
        <p>失物招领</p>
      </div>
      <div>
        <p style="font-size:40px;color:#409eff;margin:0;">{{ serviceCount }}</p>
        <p>便民服务(拼单+跑腿)</p>
      </div>
    </div>
    <h3>分类明细统计</h3>
    <p>闲置交易：{{ secondhandCount }} 条</p>
    <p>失物招领：{{ lostCount }} 条</p>
    <p>拼单搭子：{{ groupCount }} 条</p>
    <p>跑腿委托：{{ errandCount }} 条</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import axios from "axios"

const allItems = ref([])
// 统计计算
const secondhandCount = computed(() => allItems.value.filter(item => item.type === "secondhand").length)
const lostCount = computed(() => allItems.value.filter(item => item.type === "lost").length)
const groupCount = computed(() => allItems.value.filter(item => item.type === "group").length)
const errandCount = computed(() => allItems.value.filter(item => item.type === "errand").length)
const serviceCount = computed(() => groupCount.value + errandCount.value)
const totalCount = computed(() => allItems.value.length)

// 拉取数据，接口是 /items
const loadData = async () => {
  const res = await axios.get("http://localhost:3000/items")
  allItems.value = res.data
}
// 页面加载自动执行
onMounted(() => {
  loadData()
})
</script>
