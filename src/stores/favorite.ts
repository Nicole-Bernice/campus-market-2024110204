import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    // 存储收藏商品id数组，仅内存保存，刷新清空
    favoriteIds: [] as string[]
  }),
  getters: {
    // 判断某商品是否已收藏
    isFav: (state) => (id: string) => state.favoriteIds.includes(id)
  },
  actions: {
    // 添加收藏
    addFav(id: string) {
      if (!this.favoriteIds.includes(id)) {
        this.favoriteIds.push(id)
      }
    },
    // 取消收藏
    removeFav(id: string) {
      this.favoriteIds = this.favoriteIds.filter(item => item !== id)
    },
    // 切换收藏状态
    toggleFav(id: string) {
      if (this.isFav(id)) {
        this.removeFav(id)
      } else {
        this.addFav(id)
      }
    }
  }
})
