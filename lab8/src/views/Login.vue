<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 400px;">
      <h3 class="text-center mb-4">Đăng nhập hệ thống</h3>
      
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label class="form-label">Tên đăng nhập</label>
          <input type="text" class="form-control" v-model="username" placeholder="admin" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Mật khẩu</label>
          <input type="password" class="form-control" v-model="password" placeholder="vd: 123456" required>
        </div>

        <div v-if="errorMessage" class="alert alert-danger p-2 text-center small">
          {{ errorMessage }}
        </div>

        <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

function handleLogin() {
  // Giả lập kiểm tra User/Pass
  if (username.value === 'admin' && password.value === '123456') {
    // 1. Lưu trạng thái đăng nhập
    localStorage.setItem('isAuthenticated', 'true');
    // 2. Lưu tên người dùng để hiển thị (nếu cần)
    localStorage.setItem('username', username.value);
    
    // 3. Chuyển hướng vào Dashboard
    alert("Đăng nhập thành công!");
    router.push({ name: 'Dashboard' });
  } else {
    errorMessage.value = "Sai tên đăng nhập hoặc mật khẩu! (Thử: admin/123456)";
  }
}
</script>