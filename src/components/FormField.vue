<template>
  <div style="margin:12px 0;">
    <label>
      {{ label }}
      <span v-if="required" style="color:red;">*</span>
    </label>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      style="width:100%;padding:8px;margin-top:6px;border:1px solid #ddd;border-radius:6px;"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-if="errorMsg" style="color:red;font-size:12px;margin-top:4px;">{{ errorMsg }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  placeholder?: string
  required?: boolean
  modelValue: string
  errorMsg?: string
}>()
const emit = defineEmits(["update:modelValue"])
</script>
