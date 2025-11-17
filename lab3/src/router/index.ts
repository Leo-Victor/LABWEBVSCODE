import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView // Trang chủ (Bài 2)
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostView // Trang bài viết (Bài 1 + 3)
  },
  {
    path: '/post-detail', // Tạm thời dùng link tĩnh, sau này bạn có thể đổi thành /post/:id
    name: 'PostDetail',
    component: PostDetailView // Trang chi tiết (Bài 4)
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router