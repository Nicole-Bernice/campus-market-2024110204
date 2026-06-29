// src/utils/constants.ts
// 1. 帖子类型
export const ITEM_TYPE = {
  SECONDHAND: "secondhand",
  LOSTFOUND: "lostfound",
  GROUP: "group",
  ERRAND: "errand"
}

// 页面下拉框显示：值+中文名字
export const TYPE_SELECT = [
  { value: "secondhand", label: "二手交易" },
  { value: "lostfound", label: "失物招领" },
  { value: "group", label: "拼单搭子" },
  { value: "errand", label: "跑腿委托" }
]

// 2. 帖子状态
export const STATUS_LIST = ["进行中", "已完成", "已找回", "已关闭"]

// 3. 校区
export const CAMPUS = ["成龙校区", "狮子山校区"]

// 4. 安全提示
export const SAFETY_TEXT = [
  "线下交易选择校内公共场所",
  "不要私下转账，优先当面交易"
]
