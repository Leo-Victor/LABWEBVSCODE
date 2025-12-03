// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Import các components
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import UserProfileInfo from '../views/UserProfileInfo.vue'
import UserProfileSettings from '../views/UserProfileSettings.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 1. Trang chủ (Public - Ai cũng vào được)
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    // 2. Trang đăng nhập (Public)
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    // 3. Dashboard (Protected - Cần đăng nhập)
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true } 
    },

    // 4. Danh sách Blog (Protected - Cần đăng nhập)
    {
      path: '/blog',
      name: 'BlogList',
      component: BlogList,
      meta: { requiresAuth: true }
    },

    // 5. Chi tiết bài viết (Protected - Cần đăng nhập)
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost,
      meta: { requiresAuth: true }
    },

    // 6. Profile (Protected - Cần đăng nhập)
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile,
      alias: '/me', // Alias route
      meta: { requiresAuth: true },
      children: [
        {
          path: 'info',
          name: 'UserProfileInfo',
          component: UserProfileInfo
        },
        {
          path: 'settings',
          name: 'UserProfileSettings',
          component: UserProfileSettings
        }
      ]
    }
  ]
})

// Navigation Guard (Bảo vệ Route)
// SỬA LỖI Ở ĐÂY: Đổi 'from' thành '_from' để TypeScript không báo lỗi
router.beforeEach((to, _from, next) => {
  
  // Kiểm tra trạng thái đăng nhập từ localStorage
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // Nếu route cần auth (requiresAuth) mà chưa đăng nhập (!isAuthenticated)
  if (to.meta.requiresAuth && !isAuthenticated) {
    alert("Bạn cần đăng nhập để truy cập chức năng này!");
    next({ name: 'Login' }); // Chuyển về trang Login
  } else {
    next(); // Cho phép đi tiếp
  }
})

export default router