import axios from 'axios'
const request = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getAllItems = () => request.get('/items')
export const getItemsByType = (type: string) => request.get(`/items?type=${type}`)
export const getItemById = (id: number) => request.get(`/items/${id}`)
export const createItem = (data: any) => request.post('/items', data)
