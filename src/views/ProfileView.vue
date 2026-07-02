<template>
  <div class="user-center" style="padding:20px;max-width:900px;margin:0 auto;">
    <!-- 已登录 -->
    <div v-if="userStore.loginUser">
      <h2>个人中心</h2>

      <div class="user-info" style="padding:16px;border:1px solid #eee;border-radius:8px;margin-bottom:20px;">
        <h3>账号信息</h3>
        <p>当前登录账号：{{ userStore.loginUser.username }}</p>
      </div>

      <div style="margin-bottom:30px;">
        <h3>我的收藏</h3>
        <div v-if="favStore.favoriteIds.length === 0" style="color:#666;">暂无收藏商品</div>
        <div v-else>
          <ItemCard
            v-for="goods in allItemList.filter(item => favStore.isFav(item.id))"
            :key="goods.id"
            :item="goods"
          />
        </div>
      </div>

      <div>
        <h3>我的发布</h3>
        <div v-if="allItemList.filter(item => item.publisher === userStore.loginUser.username).length === 0" style="color:#666;">
          你还没有发布任何商品
        </div>
        <div v-else>
          <ItemCard
            v-for="goods in allItemList.filter(item => item.publisher === userStore.loginUser.username)"
            :key="goods.id"
            :item="goods"
          />
        </div>
      </div>
    </div>

    <!-- 未登录提示 -->
    <div v-else style="text-align:center;margin-top:100px;color:#666;font-size:18px;">
      <p>您尚未登录，无法查看个人信息、收藏与发布内容</p>
      <router-link to="/login" style="display:inline-block;margin-top:16px;padding:8px 22px;background:#409eff;color:#fff;border-radius:6px;text-decoration:none;">
        前往登录
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useUserStore } from "@/stores/user"
import { useFavoriteStore } from "@/stores/favorite"
import ItemCard from "@/components/ItemCard.vue"
import { getSecondHandApi } from "@/api/secondhand"
import { useRouter } from "vue-router"

const router = useRouter()
const userStore = useUserStore()
const favStore = useFavoriteStore()
const allItemList = ref([])

const loadAllData = async () => {
  const res = await getSecondHandApi()
  allItemList.value = res
}
onMounted(loadAllData)
</script>
