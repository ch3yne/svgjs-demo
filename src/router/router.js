import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'demo1',
    path: '/',
    component: () => import('../components/SvgDemo.vue')
  },
  {
    name: 'demo2',
    path: '/demo2',
    component: () => import('../components/SvgDemo2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
