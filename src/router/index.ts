import { createRouter, createWebHistory } from 'vue-router'
// 导入所有页面
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'
import PublishView from '../views/PublishView.vue'
import MessageView from '../views/MessageView.vue'
import ProfileView from '../views/ProfileView.vue'
import BoardView from '../views/BoardView.vue'
import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'List',
    component: ListView
  },
  {
    path: '/detail',
    name: 'Detail',
    component: DetailView
  },
  {
    path: '/publish',
    name: 'Publish',
    alias: '/publishing', // 新增别名，匹配导航栏跳转路径
    component: PublishView
  },
  {
    path: '/message',
    name: 'Message',
    component: MessageView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/board',
    name: 'Board',
    component: BoardView
  },
  // 四大分类路由
  {
    path: "/secondhand",
    name: "闲置交易",
    component: () => import("@/views/SecondHand.vue")
  },
  {
    path: "/lost",
    name: "失物招领",
    component: () => import("@/views/Lost.vue")
  },
  {
    path: "/group",
    name: "拼单搭子",
    component: () => import("@/views/Group.vue")
  },
  {
    path: "/errand",
    name: "跑腿委托",
    component: () => import("@/views/Errand.vue")
  },
  // 登录、注册路由
  {
    path: '/register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Vue3 标准守卫写法，删除废弃next，消除黄色警告
router.beforeEach((to) => {
  const userStore = useUserStore()
  // 需要登录才能访问的页面
  const authPages = ['/profile','/publish','/publishing','/message','/secondhand','/lost','/group','/errand']
  if (authPages.includes(to.path) && !userStore.loginUser) {
    return '/login'
  }
})

export default router
