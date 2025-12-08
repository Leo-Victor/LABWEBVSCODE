<template>
  <div class="p-4 border rounded shadow-sm bg-white mx-auto" style="max-width: 400px;"> 
    <h3 class="text-center text-primary">Đăng Nhập (Bài 4)</h3>
    
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label>Tên đăng nhập:</label>
        <input type="text" class="form-control" v-model="username" required>
      </div>
      <div class="mb-3">
        <label>Mật khẩu:</label>
        <input type="password" class="form-control" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['loggedIn']);
const username = ref('');
const password = ref('');
const handleLogin = () => {
  if (username.value && password.value) {
    emit('loggedIn', username.value);
  }
};
</script>