import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
