<template>
  <div class="page" style="max-width:600px;margin:30px auto;padding:20px;">
    <h2>发布信息</h2>
    <div style="margin:16px 0;">
      <label>发布类型</label>
      <select v-model="type" @change="resetForm" style="margin-left:10px;padding:6px;">
        <option value="">请选择</option>
        <option value="trade">二手交易</option>
        <option value="lost">失物招领</option>
        <option value="group">拼单搭子</option>
        <option value="errand">跑腿委托</option>
      </select>
    </div>

    <form @submit.prevent="submit">
      <FormField
        label="标题"
        placeholder="请输入标题"
        required
        v-model="form.title"
        :errorMsg="errMsg.title"
      />
      <FormField
        label="描述"
        placeholder="填写详细说明"
        required
        v-model="form.desc"
        :errorMsg="errMsg.desc"
      />

      <FormField v-if="type==='trade'" label="分类" placeholder="如：书籍/数码" required v-model="form.category" :errorMsg="errMsg.category"/>
      <FormField v-if="type==='lost'" label="类型" placeholder="丢失/捡到" required v-model="form.type" :errorMsg="errMsg.type"/>
      <FormField v-if="type==='group'" label="目标人数" placeholder="数字" required v-model="form.targetCount" :errorMsg="errMsg.targetCount"/>
      <FormField v-if="type==='errand'" label="酬劳" placeholder="数字" required v-model="form.reward" :errorMsg="errMsg.reward"/>

      <button type="submit" style="padding:8px 20px;background:#67c23a;color:white;border:none;border-radius:6px;margin-top:10px;">提交发布</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import FormField from "@/components/FormField.vue"
import { addSecondHand } from "@/api/secondhand"
import { addLost } from "@/api/lost"
import { addGroup } from "@/api/group"
import { addErrand } from "@/api/errand"

const router = useRouter()
const type = ref("")
const form = reactive({
  title: "",
  desc: "",
  category: "",
  type: "",
  targetCount: "",
  reward: ""
})
const errMsg = reactive({
  title: "",
  desc: "",
  category: "",
  type: "",
  targetCount: "",
  reward: ""
})

const resetForm = () => {
  form.title = ""
  form.desc = ""
  form.category = ""
  form.type = ""
  form.targetCount = ""
  form.reward = ""
  Object.keys(errMsg).forEach(k => (errMsg as any)[k] = "")
}

const validate = () => {
  let pass = true
  Object.keys(errMsg).forEach(k => (errMsg as any)[k] = "")
  if (!form.title) { errMsg.title = "标题不能为空"; pass = false }
  if (!form.desc) { errMsg.desc = "描述不能为空"; pass = false }
  if (type.value === "trade" && !form.category) { errMsg.category = "分类不能为空"; pass = false }
  if (type.value === "lost" && !form.type) { errMsg.type = "请填写丢失/捡到"; pass = false }
  if (type.value === "group") {
    if (!form.targetCount) { errMsg.targetCount = "请填写人数"; pass = false }
    else if (isNaN(Number(form.targetCount))) { errMsg.targetCount = "必须是数字"; pass = false }
  }
  if (type.value === "errand") {
    if (!form.reward) { errMsg.reward = "请填写酬劳"; pass = false }
    else if (isNaN(Number(form.reward))) { errMsg.reward = "必须是数字"; pass = false }
  }
  if (!type.value) { alert("请选择发布类型"); pass = false }
  return pass
}

const submit = async () => {
  if (!validate()) return
  let res
  try {
    if (type.value === "trade") res = await addSecondHand(form)
    if (type.value === "lost") res = await addLost(form)
    if (type.value === "group") res = await addGroup(form)
    if (type.value === "errand") res = await addErrand(form)
    alert("发布成功！")
    resetForm()
    const pathMap: Record<string, string> = {
      trade: "/secondhand",
      lost: "/lost",
      group: "/group",
      errand: "/errand"
    }
    router.push(pathMap[type.value])
  } catch (e) {
    alert("发布失败，请重试")
  }
}
</script>
