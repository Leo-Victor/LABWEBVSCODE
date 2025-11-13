<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>Bài 1</h1>
  <br>
  <hr>
  <h1 style="color: #D9534F;">Bảng Thành Phần Dinh Dưỡng</h1>
  <table class="table table-bordered table-hover ">
    <thead>
      <tr class="table-warning ">
        <th scope="col" rowspan="2" class="text-center align-middle">Thành Phần</th>

        <th scope="col" colspan="2" class="text-center">Giá Trị</th>
      </tr>

      <tr class="table-warning">
        <th scope="col" class="text-center">Khối Lượng</th>
        <th scope="col" class="text-center">% DV*</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Calories</th>
        <td>200 kcal</td>
        <td>20%</td>
      </tr>
      <tr>
        <th scope="row">Chất Béo</th>
        <td>9 g</td>
        <td>14%</td>
      </tr>
      <tr>
        <th scope="row">Chất Béo Bão Hòa</th>
        <td>4 g</td>
        <td>20%</td>
      </tr>
      <tr>
        <th scope="row">Chất Đạm</th>
        <td>8 g</td>
        <td>16%</td>
      </tr>
      <tr>
        <th scope="row">Chất Xơ</th>
        <td>5 g</td>
        <td>20%</td>
      </tr>
      <tr>
        <th scope="row">Đường</th>
        <td>12 g</td>
        <td>-</td>
      </tr>
      <tr>
        <th scope="row" rowspan="2" class="align-middle">Vitamin</th>
        <td>Vitamin C</td>
        <td>25%</td>
      </tr>
      <tr>
        <td>Vitamin D</td>
        <td>10%</td>
      </tr>
    </tbody>
  </table>


  <hr>
  <br>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Bài 3: Tabbed Form (Đăng ký/Đăng nhập)</h2>

    <div class="card shadow-sm mx-auto" style="max-width: 600px;">
      <div class="card-header p-0">
        <ul class="nav nav-tabs card-header-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#register" role="tab" aria-selected="true"
              style="color: black;">Đăng ký</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#login" role="tab" aria-selected="false"
              style="color: black;">Đăng nhập</a>
          </li>
        </ul>
      </div>

      <div class="card-body">
        <div class="tab-content">

          <div id="register" class="tab-pane fade show active" role="tabpanel">
            <h5 class="card-title text-center mb-4">Form Đăng Ký Thông Tin</h5>
            <form>
              <div class="mb-3">
                <label for="regFullName" class="form-label">Họ và Tên</label>
                <input type="text" class="form-control" id="regFullName" placeholder="Nhập họ và tên">
              </div>

              <div class="mb-3">
                <label for="regEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="regEmail" placeholder="Nhập email">
              </div>

              <div class="mb-3">
                <label for="regPhone" class="form-label">Số Điện Thoại</label>
                <input type="tel" class="form-control" id="regPhone" placeholder="Nhập số điện thoại">
              </div>

              <div class="mb-3">
                <label for="regPassword" class="form-label">Mật Khẩu</label>
                <input type="password" class="form-control" id="regPassword" placeholder="Nhập mật khẩu">
              </div>

              <div class="mb-3">
                <label for="regConfirmPassword" class="form-label">Xác Nhận Mật Khẩu</label>
                <input type="password" class="form-control" id="regConfirmPassword" placeholder="Xác nhận mật khẩu">
              </div>

              <div class="mb-3">
                <label class="form-label d-block">Giới Tính</label>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender" id="genderNam" value="Nam">
                  <label class="form-check-label" for="genderNam">Nam</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender" id="genderNu" value="Nữ">
                  <label class="form-check-label" for="genderNu">Nữ</label>
                </div>
              </div>

              <div class="mb-3">
                <label for="regLanguage" class="form-label">Ngôn Ngữ</label>
                <select class="form-select" id="regLanguage">
                  <option selected>Tiếng Việt</option>
                  <option>Tiếng Anh</option>
                </select>
              </div>

              <div class="mb-4 form-check">
                <input type="checkbox" class="form-check-input" id="regTerms">
                <label class="form-check-label" for="regTerms">Tôi đồng ý với các điều khoản và điều kiện</label>
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Đăng Ký</button>
              </div>
            </form>
          </div>

          <div id="login" class="tab-pane fade" role="tabpanel">
            <h5 class="card-title text-center mb-4">Form Đăng nhập</h5>
            <form>
              <div class="mb-3">
                <label for="loginEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="loginEmail" placeholder="Nhập email">
              </div>

              <div class="mb-4">
                <label for="loginPassword" class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu">
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Đăng Nhập</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>

  <hr>
  <br>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Bài 4: Kết hợp Tab và Modal</h2>
  </div>

  <div class="container mt-3">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
      Tài khoản
    </button>
  </div>


  <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">ĐĂNG NHẬP/ ĐĂNG KÝ</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-0">

          <div>
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#register" role="tab" aria-selected="true"
                  style="color: black;">Đăng ký</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#login" role="tab" aria-selected="false"
                  style="color: black;">Đăng nhập</a>
              </li>
            </ul>

            <div class="tab-content p-3">
              <div id="register" class="tab-pane fade show active" role="tabpanel">
                <h5 class="mb-4 text-center">Form Đăng Ký Thông Tin</h5>
                <form>
                  <div class="mb-3">
                    <label for="regFullName" class="form-label">Họ và Tên</label>
                    <input type="text" class="form-control" id="regFullName" placeholder="Nhập họ và tên">
                  </div>
                  <div class="mb-3">
                    <label for="regEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="regEmail" placeholder="Nhập email">
                  </div>
                  <div class="mb-3">
                    <label for="regPhone" class="form-label">Số Điện Thoại</label>
                    <input type="tel" class="form-control" id="regPhone" placeholder="Nhập số điện thoại">
                  </div>
                  <div class="mb-3">
                    <label for="regPassword" class="form-label">Mật Khẩu</label>
                    <input type="password" class="form-control" id="regPassword" placeholder="Nhập mật khẩu">
                  </div>
                  <div class="mb-3">
                    <label for="regConfirmPassword" class="form-label">Xác Nhận Mật Khẩu</label>
                    <input type="password" class="form-control" id="regConfirmPassword" placeholder="Xác nhận mật khẩu">
                  </div>
                  <div class="mb-3">
                    <label class="form-label d-block">Giới Tính</label>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="genderNam" value="Nam">
                      <label class="form-check-label" for="genderNam">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="genderNu" value="Nữ">
                      <label class="form-check-label" for="genderNu">Nữ</label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="regLanguage" class="form-label">Ngôn Ngữ</label>
                    <select class="form-select" id="regLanguage">
                      <option selected>Tiếng Việt</option>
                      <option>Tiếng Anh</option>
                    </select>
                  </div>
                  <div class="mb-4 form-check">
                    <input type="checkbox" class="form-check-input" id="regTerms">
                    <label class="form-check-label" for="regTerms">Tôi đồng ý với các điều khoản và điều kiện</label>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Đăng Ký</button>
                  </div>
                </form>
              </div>

              <div id="login" class="tab-pane fade" role="tabpanel">
                <h5 class="mb-4 text-center">Form Đăng nhập</h5>
                <form>
                  <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="loginEmail" placeholder="Nhập email">
                  </div>
                  <div class="mb-4">
                    <label for="loginPassword" class="form-label">Mật khẩu</label>
                    <input type="password" class="form-control" id="loginPassword" placeholder="Nhập mật khẩu">
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

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
