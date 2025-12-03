<template>
  <header class="p-3 bg-light border-bottom">
    <div class="container d-flex justify-content-between align-items-center">
      <h4 class="m-0 text-primary fw-bold">MyBlog</h4>
      
      <nav>
        <router-link :to="{ name: 'Home' }" class="nav-link d-inline mx-2">Home</router-link>

        <span v-if="isLoggedIn">
          | <router-link :to="{ name: 'Dashboard' }" class="nav-link d-inline mx-2 fw-bold">Dashboard</router-link>
        </span>

        <router-link v-if="!isLoggedIn" :to="{ name: 'Login' }" class="btn btn-sm btn-outline-primary ms-3">
          Login
        </router-link>

        <button v-if="isLoggedIn" @click="logout" class="btn btn-sm btn-outline-danger ms-3">
          Logout
        </button>
      </nav>
    </div>
  </header>

  <main class="container py-4">
    <router-view />
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isLoggedIn = ref(false);

// Hàm kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
  isLoggedIn.value = localStorage.getItem('isAuthenticated') === 'true';
}

// Theo dõi sự thay đổi đường dẫn (URL). 
// Mỗi khi chuyển trang, vue sẽ kiểm tra lại xem user đã đăng nhập chưa để cập nhật Menu.
watch(() => route.path, () => {
  checkLoginStatus();
});

// Hàm đăng xuất ngay trên Menu
function logout() {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('username');
  checkLoginStatus(); // Cập nhật lại menu ngay lập tức
  router.push({ name: 'Login' });
}
</script>

<style>
/* CSS để làm đẹp link */
.nav-link {
  text-decoration: none;
  color: #555;
  transition: 0.2s;
}
.nav-link:hover {
  color: #0d6efd;
}
.router-link-active {
  color: #0d6efd;
  font-weight: bold;
}
</style>