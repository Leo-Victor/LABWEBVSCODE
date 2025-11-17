<script setup lang="ts">
// Import TẤT CẢ các ảnh cần dùng trong file này
import blogImg1 from '../assets/image/blog1.jpg';
import avatarImg from '../assets/image/avatar.jpg'; // Giả sử tên file là avatar.jpg
import thumb1Img from '../assets/image/thumb1.jpg'; // Giả sử tên file là thumb1.jpg
import video1Img from '../assets/image/video1.jpg'; // Giả sử tên file là video1.jpg
</script>

<template>
    <div class="container mt-4">
        <div class="row">
            
            <div class="col-lg-3">
                <div class="card p-3 text-center">
                    <h5 class="card-title">Về tôi</h5>
                    
                    <img :src="avatarImg" class="img-fluid rounded-circle mx-auto d-block" alt="Avatar" style="width: 150px;">
                    
                    <div class="card-body">
                        <h6>Giới thiệu bản thân</h6>
                        <p class="card-text small">Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập...</p>
                    </div>
                </div>
                
                <div class="card mt-3">
                    <div class="card-header">Đọc nhiều</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item small"><router-link to="/post-detail">Biết ơn đời, đời sẽ thương ta</router-link></li>
                        <li class="list-group-item small"><a href="#">10 công dụng bất ngờ từ dầu dừa</a></li>
                        <li class="list-group-item small"><a href="#">Lợi ích khi ăn rau mỗi ngày</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-6">
                <h3 class="mb-3">Blog của tôi</h3>
                <div class="card mb-3">
                    
                    <img :src="blogImg1" class="card-img-top" alt="Pilates">
                    
                    <div class="card-body">
                        <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống 
                            <span class="badge bg-secondary">16</span>
                        </h5>
                        <p class="card-text small text-muted">Ngoài việc giúp duy trì vóc dáng...</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-3">
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item d-flex">
                        
                        <img :src="thumb1Img" alt="thumbnail" class="me-2" style="width: 60px; height: 60px; object-fit: cover;">
                        
                        <router-link to="/post-detail" class="small">Biết ơn đời, đời sẽ thương ta</router-link>
                    </li>
                    </ul>

                <h5 class="mt-4">VIDEO - ĐỪNG BỎ LỠ</h5>
                <div class="card mb-3">

                    <img :src="video1Img" class="card-img-top" alt="Video 1">
                    
                    <div class="card-body">
                        <h6 class="card-title">Đi xa hơn để trưởng thành hơn</h6>
                    </div>
                </div>
                </div>
        </div>
    </div>
</template>