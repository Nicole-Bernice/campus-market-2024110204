<template>
  <div style="max-width:600px;margin:30px auto;padding:20px;border:1px solid #eee;border-radius:8px;">
    <h2>发布信息</h2>
    <div style="margin:15px 0;">
      <label>标题：</label>
      <input v-model="form.title" placeholder="请输入标题" style="width:100%;padding:8px;margin-top:6px;"/>
    </div>
    <div style="margin:15px 0;">
      <label>描述：</label>
      <textarea v-model="form.desc" rows="4" placeholder="详细描述" style="width:100%;padding:8px;margin-top:6px;"></textarea>
    </div>
    <div style="margin:15px 0;">
      <label>分类：</label>
      <select v-model="form.type" style="width:100%;padding:8px;margin-top:6px;">
        <option value="secondhand">闲置交易</option>
        <option value="lost">失物招领</option>
        <option value="group">拼单搭子</option>
        <option value="errand">跑腿委托</option>
      </select>
    </div>
    <!-- 新增loading状态控制按钮文字+禁用，防止重复提交 -->
    <button
      @click="submit"
      :disabled="submitLoading"
      style="padding:10px 24px;background:#409eff;color:#fff;border:none;border-radius:4px;cursor:pointer;"
    >
      {{ submitLoading ? '提交中...' : '提交发布' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useUserStore } from "@/stores/user"
import axios from "axios"
import { useRouter } from "vue-router"

const userStore = useUserStore()
const router = useRouter()

// 新增提交加载状态
const submitLoading = ref(false)

// 表单数据，type自动对应分类标记
const form = ref({
  title: "",
  desc: "",
  type: "secondhand"
})

// 提交发布
const submit = async () => {
  // 登录拦截（优先校验登录）
  if (!userStore.loginUser) {
    alert('请先登录，才能发布内容！')
    router.push('/login')
    return
  }

  if (!form.value.title || !form.value.desc) {
    alert("标题和描述不能为空！")
    return
  }

  // 开启加载、锁定按钮
  submitLoading.value = true

  // 组装数据，自带type用于看板统计
  const postData = {
    title: form.value.title,
    desc: form.value.desc,
    type: form.value.type,
    publisher: userStore.loginUser.username
  }
  try {
    await axios.post("http://localhost:3000/items", postData)
    alert("发布成功！自动跳转综合集市看板")
    router.push("/list")
  } catch (err) {
    alert("发布失败，请确认json-server正在运行")
    console.error("错误详情：", err)
  } finally {
    // 无论成功失败，关闭加载、解锁按钮
    submitLoading.value = false
  }
}
</script>
