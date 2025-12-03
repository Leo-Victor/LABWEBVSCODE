<template>
  <div>
    <h1>Chi tiết bài viết</h1>
    <h3>Đang xem bài viết có ID: {{ $route.params.id }}</h3>
    <p>Nội dung chi tiết của bài viết sẽ hiển thị ở đây...</p>
    <router-link to="/blog">Quay lại danh sách</router-link>
  </div>
</template>