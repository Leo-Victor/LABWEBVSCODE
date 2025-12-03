<script setup lang="ts">
//Bài 1
import { ref } from 'vue';
// 1. Tạo biến để lưu điểm nhập vào (khởi tạo là null hoặc 0)
const diemTrungBinh = ref<number | null>(null);

// 2. Tạo biến riêng để lưu kết quả xếp loại (dạng chuỗi)
const ketQuaXepLoai = ref<string>('');

// 3. Hàm kiểm tra logic
const kiemTra = () => {
  // Lấy giá trị ra xử lý, ép kiểu về Number để chắc chắn
  const d = Number(diemTrungBinh.value);

  // Logic so sánh dựa trên đề bài
  if (d < 5.0) {
    ketQuaXepLoai.value = "Yếu";
  } else if (d < 6.5) {
    ketQuaXepLoai.value = "Trung bình";
  } else if (d < 8.0) {
    ketQuaXepLoai.value = "Khá";
  } else if (d < 9.0) {
    ketQuaXepLoai.value = "Giỏi";
  } else {
    // Trường hợp >= 9.0
    ketQuaXepLoai.value = "Xuất sắc";
  }
}

//Bài 2
const month = ref(1);


//Bài 3
import img1 from "./assets/image/img1.jpg";
import img2 from "./assets/image/img2.jpg";
import img3 from "./assets/image/img3.jpg";
// 2. Bọc mảng items trong ref() để Vue theo dõi thay đổi
const items = ref([
  {
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất.',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác.',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất.',
    image: img3
  },
]);

//Bài 4
// 1. Khởi tạo dữ liệu mẫu ban đầu [cite: 182]
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

// 2. Biến quản lý trạng thái form và chế độ sửa [cite: 187, 192, 193]
const student = ref({
  name: '',
  score: 0, // Sửa null thành 0
  dob: ''
});

const isEditing = ref(false);
const editingIndex = ref<number | null>(null);

// 3. Hàm xử lý khi nhấn nút Thêm/Cập nhật [cite: 198]
function submitForm() {
  if (isEditing.value) {
    // Logic cập nhật: Gán dữ liệu từ form vào vị trí index đang sửa [cite: 203]
    students.value[editingIndex.value as number] = { ...student.value } as any;

    // Reset trạng thái sửa về ban đầu [cite: 204, 205]
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    // Logic thêm mới: Push dữ liệu vào mảng [cite: 206]
    students.value.push({ ...student.value });
  }
  // Xóa trắng form sau khi thực hiện xong [cite: 211]
  resetForm();
}

// 4. Hàm xử lý khi nhấn nút Sửa [cite: 212]
function editStudent(index :any) {
  // Copy dữ liệu của học sinh được chọn lên form [cite: 213]
  student.value = { ...students.value[index] } as any;
  isEditing.value = true;
  editingIndex.value = index;
}

// 5. Hàm xử lý khi nhấn nút Xóa [cite: 217]
function deleteStudent(index :any) {
  students.value.splice(index, 1);
}

// 6. Hàm reset form về rỗng [cite: 220]
function resetForm() {
  student.value = {
    name: '',
    score: 0,
    dob: ''
  };
}
</script>

<template>
  <!-- Bài 1 -->
  <h1>Bài 1</h1>
  <br>
  <div style="padding: 20px;">
    <h3>Nhập điểm của bạn:</h3>

    <input type="number" v-model="diemTrungBinh" class="form-control" placeholder="Nhập điểm..."
      style="margin-bottom: 10px;">

    <button class="btn btn-dark" @click="kiemTra">
      Kiểm tra
    </button>

    <p v-if="ketQuaXepLoai" style="margin-top: 10px; font-weight: bold;">
      Xếp loại: {{ ketQuaXepLoai }}
    </p>
  </div>
  <br>
  <!-- Bài 2 -->
  <h1>Bài 2</h1>
  <br>
  <div class="container">
    <h3>Nhập vào tháng của bạn</h3>
    <input type="number" v-model.number="month" />
    <p v-if="month < 1 || month > 12" style="color: red">Vui lòng nhập từ tháng 1 đến tháng 12!</p>
    <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
    <p v-else-if="month <= 6">Mùa Hè</p>
    <p v-else-if="month <= 9">Mùa Thu</p>
    <p v-else>Mùa Đông</p>
  </div>
  <br>
  <!-- Bài 3 -->
  <h1>Bài 3</h1>
  <br>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card">
          <img :src="item.image" class="img-fluid" alt="Hình ảnh" />
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>

    </div>
  </div>

  <br>
  <!-- Bài 4 -->
  <h1>Bài 4</h1>
  <br>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-4">
        <h3>{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-3 mt-3">
            <label for="name">Họ tên:</label>
            <input type="text" class="form-control" v-model="student.name" id="name" required />
          </div>
          <div class="mb-3">
            <label for="score">Điểm:</label>
            <input type="number" max="10" min="0" class="form-control" v-model="student.score" id="score" required />
          </div>
          <div class="mb-3">
            <label for="dob">Ngày sinh:</label>
            <input type="date" class="form-control" v-model="student.dob" id="dob" required />
          </div>
          <button type="submit" class="btn btn-success">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
          <button v-if="isEditing" @click="resetForm(); isEditing = false" type="button"
            class="btn btn-secondary ms-2">Hủy</button>
        </form>
      </div>

      <div class="col-sm-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">Sửa</button>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
