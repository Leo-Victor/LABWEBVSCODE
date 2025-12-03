<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 text-center mb-4">
        <h1>Bảng điều khiển (Dashboard)</h1>
        <p class="text-muted">Chào mừng quay trở lại!</p>
      </div>
    </div>

    <div class="row justify-content-center g-4">
      
      <div class="col-md-5">
        <div class="card h-100 text-center shadow-sm hover-effect">
          <div class="card-body">
            <h3 class="card-title text-success">Quản lý Blog</h3>
            <p class="card-text">Xem danh sách bài viết và chi tiết.</p>
            <router-link :to="{ name: 'BlogList' }" class="btn btn-success">
              Đến trang Blog
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <div class="card h-100 text-center shadow-sm hover-effect">
          <div class="card-body">
            <h3 class="card-title text-info">Hồ sơ cá nhân</h3>
            <p class="card-text">Xem thông tin và cài đặt tài khoản.</p>
            <router-link to="/me" class="btn btn-info text-white">
              Đến Profile
            </router-link>
          </div>
        </div>
      </div>

    </div>

    <div class="text-center mt-5">
      <button @click="logout" class="btn btn-danger">Đăng xuất</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function logout() {
  localStorage.removeItem('isAuthenticated');
  router.push({ name: 'Login' });
}
</script>

<style scoped>
.hover-effect:hover {
  transform: translateY(-5px);
  transition: 0.3s;
}
</style>