<template>
  <div class="col-sm-6 p-4 mx-auto border rounded shadow bg-white">
    <h3 class="mb-3">Bình luận bài viết</h3>
    
    <div class="card mb-4">
        <img src="https://via.placeholder.com/600x300" class="card-img-top" alt="Bài viết">
      <div class="card-body">
        <h5 class="card-title">8 loại rau củ quả giàu canxi</h5>
        <p class="card-text">
          Canxi là khoáng chất cần thiết đối với cơ thể người. 
          Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất.
        </p>
      </div>
    </div>

    <form @submit.prevent="submitComment">
      <div class="mb-3">
        <label class="form-label fw-bold">Nhập bình luận của bạn:</label>
        <textarea 
          class="form-control" 
          rows="3" 
          v-model="commentText"
          placeholder="Viết gì đó..."
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">Gửi bình luận</button>
    </form>

    <div v-if="comments.length" class="mt-4">
      <h5>Danh sách các bình luận:</h5>
      <ul class="list-group">
        <li 
          class="list-group-item" 
          v-for="(item, index) in comments" 
          :key="index"
        >
          <strong>{{ item.name }}:</strong> {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. Nhận dữ liệu (username) từ Cha truyền vào
const props = defineProps(['username']);

const commentText = ref('');
const comments = ref([]);

const submitComment = () => {
  if (commentText.value.trim()) {
    // Thêm bình luận mới vào mảng
    comments.value.push({
      name: props.username, // Lấy tên từ props
      text: commentText.value
    });
    
    // Reset ô nhập liệu
    commentText.value = '';
  }
};
</script>