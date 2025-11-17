<script setup lang="ts">
// Import TẤT CẢ 5 ảnh cần dùng
import carousel1 from '../assets/image/carousel-1.jpg';
import carousel2 from '../assets/image/carousel-2.jpg';
import carousel3 from '../assets/image/carousel-3.jpg';
import nb1Img from '../assets/image/nb1.jpg'; // Giả sử tên file là nb1.jpg
import blog1Img from '../assets/image/blog1.jpg';
</script>

<template>
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner" style="max-height: 450px; object-fit: cover;">
            <div class="carousel-item active">
                
                <img :src="carousel1" class="d-block w-100" alt="Slide 1">
            
            </div>
            <div class="carousel-item">
                
                <img :src="carousel2" class="d-block w-100" alt="Slide 2">
            
            </div>
            <div class="carousel-item">
                
                <img :src="carousel3" class="d-block w-100" alt="Slide 3">
            
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>

    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-3">
                <h5 class="mb-3">Chuyên mục</h5>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Chế độ tập
                        <span class="badge bg-primary rounded-pill">12</span>
                    </li>
                    </ul>

                <h5 class="mt-4 mb-3">Bài viết nổi bật</h5>
                <div class="d-flex mb-3">
                    
                    <img :src="nb1Img" alt="Rau" class="me-2" style="width: 80px; height: 80px; object-fit: cover;">
                    
                    <div>
                        <a href="#" class="text-dark fw-bold">Lợi ích khi ăn rau mỗi ngày</a>
                    </div>
                </div>
                 </div>

            <div class="col-lg-9">
                <h3 class="mb-3">Tất cả bài viết</h3>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            
                            <img :src="blog1Img" class="card-img-top" alt="Bài viết 1">
                            
                            <div class="card-body">
                                <h5 class="card-title">
                                    <router-link to="/post-detail">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</router-link>
                                </h5>
                                <p class="card-text small">Ngoài việc giúp duy trì vóc dáng...</p>
                            </div>
                        </div>
                    </div>
                    </div>

                <nav class="mt-4">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled"><a class="page-link" href="#">←</a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">→</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>