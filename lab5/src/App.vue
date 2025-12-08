<script setup >
// Bài 1
import { ref } from 'vue';
const message = ref('Thông điệp ban đầu');
const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!';
};
//Bài 2
//import { ref } from 'vue';
const userInput = ref('FPL');
//Bài 3
import { reactive } from 'vue';
// Khởi tạo đối tượng thông tin người dùng sử dụng reactive để tạo reactivity
const userInfo = reactive({
  name: '',
  age: null,
  email: ''
});
//Bài 4
//import { ref } from 'vue'
// Lưu ý: Đảm bảo đường dẫn file đúng với nơi bạn lưu 2 file trước đó
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = ref([])

function addPost(post) {
  posts.value.push(post)
}

</script>

<template>
  <h1>Bài 1</h1>
  <br>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
  </div>
  <br>
  <h1>Bài 2</h1>
  <div>
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>
  <br>
  <h1>Bài 3</h1>
  <br>
  <div class="col-sm-8">
    <h1>Thông tin cá nhân</h1>
    <form>
      <div class="mb-3 text-start">
        <label >Họ và Tên:</label>
        <input v-model="userInfo.name" type="text" class="form-control" placeholder="Nhập họ và tên" />
      </div>
      <div class="mb-3 text-start">
        <label>Tuổi:</label>
        <input v-model="userInfo.age" type="number" class="form-control" placeholder="Nhập tuổi" />
      </div>
      <div class="mb-3 text-start">
        <label>Email:</label>
        <input v-model="userInfo.email" type="email" class="form-control" placeholder="Nhập email" />
      </div>
    </form>
    <!-- Hiển thị thông tin ngay sau khi nhập -->
    <div class="info-display mt-4 p-3 bg-dark text-white rounded">
      <h2>Thông tin đã nhập:</h2>
      <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
      <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
      <p><strong>Email:</strong> {{ userInfo.email }}</p>
    </div>
  </div>

  <br>
  <h1>Bài 4</h1>
  <br>
  <div id="app">
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>


</template>

<style scoped>
  
input,
textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
