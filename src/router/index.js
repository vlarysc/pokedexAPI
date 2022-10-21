import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/web/Home/Index.vue'

const routers = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
 ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routers
})



export default router;