// 引入统一封装好的axios实例
import request from "./http"

// 获取全部帖子列表
export const getAllItems = () => request.get('/items')

// 按类型筛选帖子
export const getItemsByType = (type: string) => request.get(`/items?type=${type}`)

// 获取单条帖子详情
export const getItemById = (id: number) => request.get(`/items/${id}`)

// 新增帖子
export const createItem = (data: any) => request.post('/items', data)

// 补充修改状态接口（实训需要）
export const updateItemStatus = (id: number, status: string) => request.patch(`/items/${id}`, { status })
