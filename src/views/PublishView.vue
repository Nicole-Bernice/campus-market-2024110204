<template>
  <div class="page-wrap">
    <h1>发布商品</h1>
    <el-form :model="form" label-width="100px" class="mt-8">
      <el-form-item label="分类">
        <el-select v-model="form.type">
          <el-option label="闲置交易" value="secondhand" />
          <el-option label="失物招领" value="lostfound" />
          <el-option label="拼单搭子" value="group" />
          <el-option label="跑腿委托" value="errand" />
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createItem } from '@/api/item'
const router = useRouter()

const form = ref({
  type: '',
  title: '',
  desc: ''
})

const submit = async () => {
  await createItem(form.value)
  router.push('/list')
}
</script>

<style scoped>
.page-wrap {
  min-height: 65vh;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
}
h1 {
  font-size: 42px;
  color: #1d2129;
  margin: 0 0 20px;
}
</style>
