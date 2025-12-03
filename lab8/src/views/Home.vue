<template>
  <div class="text-center mt-5">
    <h1 class="display-4 text-primary">Chào mừng đến với MyBlog</h1>
    <p class="lead text-secondary">Nền tảng chia sẻ kiến thức và kết nối cộng đồng.</p>
    
    <div class="mt-4">
      <div v-if="isLoggedIn">
        <p class="text-success fw-bold">Xin chào, bạn đã đăng nhập!</p>
        <router-link :to="{ name: 'Dashboard' }" class="btn btn-primary btn-lg">
          Truy cập Dashboard <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>

      <div v-else>
        <p>Vui lòng đăng nhập để sử dụng các chức năng.</p>
        <router-link :to="{ name: 'Login' }" class="btn btn-outline-primary btn-lg px-5">
          Đăng nhập ngay
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoggedIn = ref(false);

onMounted(() => {
  // Kiểm tra localStorage khi trang vừa tải
  isLoggedIn.value = localStorage.getItem('isAuthenticated') === 'true';
});
</script>