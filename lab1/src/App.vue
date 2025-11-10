<script setup lang="ts">
import avatarUrl from './assets/vue.svg'
 import logofpt from './assets/image/Logo-Truong-Cao-dang-FPT-Polytechnic.webp'

</script>

<template>
  <div class="container">
    <header class="row bg-warning p-3 d-flex align-items-center">
      <div class="col-auto">
        <img :src="logofpt" alt="FPT Education" style="height: 60px;"> 
      </div>
      
    </header>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="Lab3ChuyenMuc.html"><i class="fa-solid fa-list"></i> Bài Viết</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới Thiệu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự Kiện</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><i
                  class="fa-solid fa-user"></i> Tài Khoản</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
              </ul>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link">Tiếng Việt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Tiếng Anh</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="row mt-4"> <aside class="col-sm-4"> 
        <h2 class="text-info mb-3">Về tôi</h2>
        <div class="card mb-4"> <img :src="avatarUrl" class="card-img-top p-3" alt="Avatar" style="border-radius: 1.25rem;"> 
          <div class="card-body">
            <h5 class="card-title">Giới thiệu bản thân</h5>
            <p class="card-text">TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập <br> châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
            </p>
          </div>
        </div>

        <h3 class="text-info mt-2 mb-3">Chuyên mục</h3> <ul class="list-group">
          <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
            <a class="nav-link text-white" href="#">Chế độ tập</a> <span class="badge bg-primary rounded-pill">12</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <a class="nav-link text-dark" href="#">Chế độ dinh dưỡng</a> <span class="badge bg-primary rounded-pill">15</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <a class="nav-link text-dark" href="#">Cẩm nang cuộc sống</a> <span class="badge bg-primary rounded-pill">99</span>
          </li>
        </ul>
      </aside>

      <article class="col-sm-8">
        <h2 class="mb-3">Blog của tôi</h2>

        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://via.placeholder.com/150x100" class="img-fluid rounded-start" alt="Pilates"> </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <span class="badge bg-secondary ms-2">16</span></h5>
                <p class="card-text">Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dài hơn, kéo giãn hơn...</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://via.placeholder.com/80x80" class="img-fluid rounded-start" alt="Biết ơn">
                </div>
                <div class="col-md-8">
                  <div class="card-body py-2">
                    <h6 class="card-title mb-0">Biết ơn đời, đời sẽ thương ta <span class="badge bg-secondary ms-1">30</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://via.placeholder.com/80x80" class="img-fluid rounded-start" alt="Quả cam">
                </div>
                <div class="col-md-8">
                  <div class="card-body py-2">
                    <h6 class="card-title mb-0">9 tác dụng tuyệt vời của quả cam <span class="badge bg-secondary ms-1">28</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://via.placeholder.com/80x80" class="img-fluid rounded-start" alt="Dầu dừa">
                </div>
                <div class="col-md-8">
                  <div class="card-body py-2">
                    <h6 class="card-title mb-0">10 công dụng bất ngờ từ dầu dừa <span class="badge bg-secondary ms-1">15</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://via.placeholder.com/80x80" class="img-fluid rounded-start" alt="Rau xanh">
                </div>
                <div class="col-md-8">
                  <div class="card-body py-2">
                    <h6 class="card-title mb-0">Lợi ích khi ăn rau mỗi ngày <span class="badge bg-secondary ms-1">12</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-3">
          <button class="btn btn-primary">Xem thêm</button>
        </div>
      </article>
    </section>

    <footer class="row bg-dark text-white text-center p-3 mt-4"> <p class="mb-0">&copy;Copyright by FPT Polytechnic</p>
    </footer>
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


.list-group-item .nav-link {
  padding: 0; /* Loại bỏ padding mặc định của nav-link trong list-group-item */
}


.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
