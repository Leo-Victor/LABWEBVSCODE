<template>
  <div v-if="!isSystemLoggedIn" class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card border-0 shadow-lg p-4" style="width: 100%; max-width: 500px;">
      <div class="card-body">
        <h3 class="text-center text-primary fw-bold mb-4">HỆ THỐNG LAB 7</h3>
        <p class="text-center text-muted mb-4">Vui lòng đăng nhập để truy cập kho bài tập</p>
        
        <form @submit.prevent="handleSystemLogin">
          <div class="mb-4">
            <label class="form-label fw-bold">Tài khoản (admin):</label>
            <input type="text" class="form-control form-control-lg" v-model="systemUsername" placeholder="Nhập admin...">
          </div>
          <div class="mb-4">
            <label class="form-label fw-bold">Mật khẩu (123):</label>
            <input type="password" class="form-control form-control-lg" v-model="systemPassword" placeholder="Nhập 123...">
          </div>
          
          <div v-if="systemError" class="alert alert-danger text-center mb-3">
            <i class="bi bi-exclamation-triangle-fill me-2"></i> {{ systemError }}
          </div>
          
          <button type="submit" class="btn btn-primary btn-lg w-100 fw-bold">Truy cập ngay</button>
        </form>
      </div>
    </div>
  </div>

  <div v-else class="min-vh-100 bg-gray-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div class="container">
        <span class="navbar-brand fw-bold cursor-pointer" @click="activeTab = 'menu'">
          <i class="bi bi-grid-fill me-2"></i> DASHBOARD LAB 7
        </span>
        <div class="d-flex align-items-center text-white">
          <span class="me-3 d-none d-md-block">Xin chào, <strong>{{ systemUsername }}</strong></span>
          <button class="btn btn-light text-primary fw-bold btn-sm" @click="handleSystemLogout">
            <i class="bi bi-box-arrow-right"></i> Đăng xuất
          </button>
        </div>
      </div>
    </nav>

    <div class="container py-5">

      <div v-if="activeTab === 'menu'">
        <div class="text-center mb-5">
          <h2 class="fw-bold text-dark">Danh sách bài thực hành</h2>
          <p class="text-muted">Chọn một bài tập bên dưới để bắt đầu</p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3" v-for="(item, index) in menuItems" :key="index">
            <div class="card h-100 border-0 shadow-sm hover-elevate cursor-pointer" @click="activeTab = item.id">
              <div class="card-body text-center p-5">
                <div class="icon-box mb-3 mx-auto" :class="`text-${item.color} bg-${item.color}-subtle`">
                  <i :class="`bi ${item.icon} fs-1`"></i>
                </div>
                <h5 class="card-title fw-bold mb-3">{{ item.title }}</h5>
                <p class="card-text text-muted small">{{ item.desc }}</p>
                <button class="btn btn-sm mt-2" :class="`btn-outline-${item.color}`">Làm bài ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <button class="btn btn-secondary mb-4 shadow-sm" @click="activeTab = 'menu'">
          <i class="bi bi-arrow-left me-2"></i> Quay lại Menu
        </button>

        <div v-if="activeTab === 'bai1'" class="card border-0 shadow-sm">
          <div class="card-header bg-primary text-white p-3">
            <h4 class="m-0"><i class="bi bi-list-check me-2"></i> Bài 1: Quản lý công việc</h4>
          </div>
          <div class="card-body p-5"> <div class="row justify-content-center">
              <div class="col-lg-8"> <form @submit.prevent="addList" class="mb-4">
                  <label class="form-label fw-bold">Thêm công việc mới:</label>
                  <div class="input-group input-group-lg"> <input type="text" class="form-control" v-model="newToDo" placeholder="Ví dụ: Làm bài tập Vue.js...">
                    <button class="btn btn-primary px-4" type="submit">Thêm</button>
                  </div>
                </form>

                <div class="list-group shadow-sm">
                  <div class="list-group-item p-3 d-flex justify-content-between align-items-center" 
                       v-for="(job, index) in jobs" :key="index">
                    <span class="fs-5">{{ job }}</span>
                    <button class="btn btn-outline-danger px-3" @click="removeList(index)">
                      <i class="bi bi-trash"></i> Xóa
                    </button>
                  </div>
                  <div v-if="jobs.length === 0" class="text-center p-4 text-muted bg-light">
                    Chưa có công việc nào. Hãy thêm mới!
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'bai2'" class="card border-0 shadow-sm">
          <div class="card-header bg-success text-white p-3">
            <h4 class="m-0"><i class="bi bi-shield-lock me-2"></i> Bài 2: Form Đăng nhập</h4>
          </div>
          <div class="card-body p-5">
            <div class="row justify-content-center">
              <div class="col-lg-6 col-md-8"> <div v-if="!isLoggedInBai2" class="p-4 border rounded bg-white shadow-sm">
                  <h3 class="text-center text-success mb-4">Đăng Nhập</h3>
                  <form @submit.prevent="loginBai2">
                    <div class="mb-3">
                      <label class="form-label">Email:</label>
                      <input type="email" class="form-control form-control-lg" v-model="emailBai2" placeholder="name@example.com">
                      <p v-if="emailError" class="text-danger small mt-1"><i class="bi bi-x-circle"></i> {{ emailError }}</p>
                    </div>
                    <div class="mb-4">
                      <label class="form-label">Mật khẩu:</label>
                      <input type="password" class="form-control form-control-lg" v-model="passwordBai2" placeholder="********">
                      <p v-if="passwordError" class="text-danger small mt-1"><i class="bi bi-x-circle"></i> {{ passwordError }}</p>
                    </div>
                    <button type="submit" class="btn btn-success btn-lg w-100">Đăng nhập ngay</button>
                  </form>
                </div>

                <div v-else class="text-center p-5 bg-success-subtle rounded border border-success">
                  <i class="bi bi-check-circle-fill text-success display-1 mb-3"></i>
                  <h2 class="text-success">Đăng nhập thành công!</h2>
                  <p class="fs-5">Chào mừng, <strong>{{ emailBai2 }}</strong></p>
                  <button @click="logoutBai2" class="btn btn-outline-success mt-3 px-4">Đăng xuất</button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'bai3'" class="card border-0 shadow-sm">
          <div class="card-header bg-info text-white p-3">
            <h4 class="m-0"><i class="bi bi-person-plus me-2"></i> Bài 3: Form Đăng Ký</h4>
          </div>
          <div class="card-body p-4">
            <div class="row g-5"> <div class="col-lg-6">
                <div class="p-4 bg-light rounded h-100">
                  <h5 class="text-info mb-4 border-bottom pb-2">Thông tin đăng ký</h5>
                  <form @submit.prevent="register">
                    <div class="mb-3"><label class="form-label">Họ và tên:</label><input type="text" class="form-control" v-model="student.fullName" required></div>
                    <div class="mb-3"><label class="form-label">Email:</label><input type="email" class="form-control" v-model="student.email" required></div>
                    <div class="mb-3"><label class="form-label">Mật khẩu:</label><input type="password" class="form-control" v-model="student.password" required></div>
                    <div class="mb-3"><label class="form-label">Ngày sinh:</label><input type="date" class="form-control" v-model="student.dob"></div>
                    
                    <div class="mb-3">
                      <label class="form-label d-block">Giới tính:</label>
                      <div class="btn-group w-100" role="group">
                        <input type="radio" class="btn-check" name="gender" id="g1" value="Nam" v-model="student.gender" autocomplete="off">
                        <label class="btn btn-outline-secondary" for="g1">Nam</label>
                        <input type="radio" class="btn-check" name="gender" id="g2" value="Nữ" v-model="student.gender" autocomplete="off">
                        <label class="btn btn-outline-secondary" for="g2">Nữ</label>
                      </div>
                    </div>

                    <div class="mb-4">
                      <label class="form-label d-block">Ngôn ngữ:</label>
                      <div class="d-flex gap-3">
                        <div class="form-check"><input class="form-check-input" type="checkbox" value="Tiếng Việt" v-model="student.languages" id="l1"><label class="form-check-label" for="l1">Tiếng Việt</label></div>
                        <div class="form-check"><input class="form-check-input" type="checkbox" value="Tiếng Anh" v-model="student.languages" id="l2"><label class="form-check-label" for="l2">Tiếng Anh</label></div>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-info w-100 text-white fw-bold">Đăng ký tài khoản</button>
                  </form>
                </div>
              </div>
              
              <div class="col-lg-6">
                <div class="p-4 border border-info rounded h-100 bg-white shadow-sm">
                  <h5 class="text-info mb-4 border-bottom pb-2">Kết quả hiển thị</h5>
                  <div v-if="submittedData">
                    <div class="alert alert-success"><i class="bi bi-check-circle me-2"></i> Đăng ký thành công!</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><strong>Họ tên:</strong> {{ submittedData.fullName }}</li>
                      <li class="list-group-item"><strong>Email:</strong> {{ submittedData.email }}</li>
                      <li class="list-group-item"><strong>Ngày sinh:</strong> {{ submittedData.dob }}</li>
                      <li class="list-group-item"><strong>Giới tính:</strong> {{ submittedData.gender }}</li>
                      <li class="list-group-item"><strong>Ngôn ngữ:</strong> {{ submittedData.languages.join(', ') }}</li>
                    </ul>
                  </div>
                  <div v-else class="text-center text-muted d-flex flex-column justify-content-center h-75">
                    <i class="bi bi-clipboard-data display-4 mb-3 opacity-25"></i>
                    <p>Dữ liệu sau khi đăng ký sẽ hiện tại đây</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'bai4'" class="card border-0 shadow-sm">
          <div class="card-header bg-danger text-white p-3">
            <h4 class="m-0"><i class="bi bi-chat-dots me-2"></i> Bài 4: Hệ thống Bình luận</h4>
          </div>
          <div class="card-body p-4">
            <div v-if="!isLoggedInBai4" class="row justify-content-center">
              <div class="col-md-6">
                <LoginComponent @loggedIn="handleLoginSuccessBai4" />
              </div>
            </div>
            
            <div v-else>
              <div class="d-flex justify-content-between align-items-center mb-4 bg-light p-3 rounded">
                <span class="fs-5">Đang đăng nhập: <strong class="text-danger">{{ currentUserBai4 }}</strong></span>
                <button class="btn btn-outline-danger btn-sm" @click="isLoggedInBai4 = false">Thoát</button>
              </div>
              <CommentComponent :username="currentUserBai4" />
            </div>
          </div>
        </div>

      </div> </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import LoginComponent from './components/LoginComponent.vue';
import CommentComponent from './components/CommentComponent.vue';

// --- CONFIG ---
const activeTab = ref('menu'); 
const menuItems = [
  { id: 'bai1', title: 'Quản lý công việc', icon: 'bi-list-check', color: 'primary', desc: 'Thêm xóa công việc (Todo List)' },
  { id: 'bai2', title: 'Form Đăng nhập', icon: 'bi-shield-lock', color: 'success', desc: 'Validate form, v-if/v-else' },
  { id: 'bai3', title: 'Form Đăng Ký', icon: 'bi-person-plus', color: 'info', desc: 'Form binding, Radio, Checkbox' },
  { id: 'bai4', title: 'Hệ thống Bình luận', icon: 'bi-chat-dots', color: 'danger', desc: 'Components, Props & Emit' }
];

// --- LOGIN SYSTEM ---
const isSystemLoggedIn = ref(false);
const systemUsername = ref('');
const systemPassword = ref('');
const systemError = ref('');

const handleSystemLogin = () => {
  if (systemUsername.value === 'admin' && systemPassword.value === '123') {
    isSystemLoggedIn.value = true;
    systemError.value = '';
  } else {
    systemError.value = 'Thông tin không chính xác (admin / 123)';
  }
};
const handleSystemLogout = () => {
  isSystemLoggedIn.value = false;
  activeTab.value = 'menu';
  systemUsername.value = '';
  systemPassword.value = '';
};

// --- BAI 1 ---
const newToDo = ref('');
const jobs = ref(['Học Vue.js cơ bản', 'Làm bài Lab 7', 'Nộp bài lên LMS']);
const addList = () => { if(newToDo.value.trim()) { jobs.value.push(newToDo.value.trim()); newToDo.value = ''; }};
const removeList = (i) => jobs.value.splice(i, 1);

// --- BAI 2 ---
const isLoggedInBai2 = ref(false);
const emailBai2 = ref('');
const passwordBai2 = ref('');
const emailError = ref('');
const passwordError = ref('');
const loginBai2 = () => {
  emailError.value = !emailBai2.value ? 'Vui lòng nhập email' : '';
  passwordError.value = !passwordBai2.value ? 'Vui lòng nhập mật khẩu' : '';
  if(!emailError.value && !passwordError.value) isLoggedInBai2.value = true;
};
const logoutBai2 = () => { isLoggedInBai2.value = false; emailBai2.value = ''; passwordBai2.value = ''; };

// --- BAI 3 ---
const student = reactive({ fullName: '', email: '', password: '', dob: '', gender: 'Nam', languages: [] });
const submittedData = ref(null);
const register = () => { submittedData.value = { ...student }; };

// --- BAI 4 ---
const isLoggedInBai4 = ref(false);
const currentUserBai4 = ref('');
const handleLoginSuccessBai4 = (user) => { currentUserBai4.value = user; isLoggedInBai4.value = true; };
</script>

<style scoped>
/* BACKGROUND */
.bg-gray-100 { background-color: #f8f9fa; }

/* CARD & HOVER EFFECTS */
.hover-elevate {
  transition: all 0.3s ease;
}
.hover-elevate:hover {
  transform: translateY(-5px);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.cursor-pointer { cursor: pointer; }

/* ICON BOX */
.icon-box {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.bg-primary-subtle { background-color: #cfe2ff; }
.bg-success-subtle { background-color: #d1e7dd; }
.bg-info-subtle { background-color: #cff4fc; }
.bg-danger-subtle { background-color: #f8d7da; }
</style>