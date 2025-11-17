<script setup lang="ts">
// Import 2 ảnh cần dùng
import blogImg1 from '../assets/image/blog1.jpg';
import blogImgSub from '../assets/image/blog1-sub.jpg';
</script>

<template>
    <div class="container mt-4">
        <div class="row">

            <div class="col-lg-8">
                <article>
                    <h2 class="mb-3">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h2>
                    
                    <img :src="blogImg1" class="img-fluid rounded mb-3" alt="Pilates">

                    <p>Tập Pilates có thể vẫn còn khá xa lạ với người Việt...</p>
                    
                    <h4 class="mt-4">Phương pháp tập Pilates Cat Cow</h4>
                    
                    <img :src="blogImgSub" class="img-fluid rounded my-3" alt="Tập Cat Cow">
                    
                    <h5>Các bước thực hiện:</h5>
                    <ul>
                        <li>Bắt đầu với tư thế 4 điểm...</li>
                        <li>Hít vào, võng lưng, nâng cằm lên...</li>
                    </ul>
                    
                    <h4 class="mt-4">Lời kết</h4>
                    <p>Trên đây là phương pháp tập Pilates giúp phục hồi...</p>
                </article>
            </div>

            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5>Bình luận bài viết tại đây</h5>
                        <form>
                            <div class="mb-3">
                                <textarea class="form-control" rows="3" placeholder="Nhập bình luận của bạn..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Gửi bình luận</button>
                        </form>
                        <hr>
                        <h5 class="mt-3">Danh sách các bình luận:</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Bình An:</strong> Bài viết rất hữu ích.</li>
                            <li class="list-group-item"><strong>Bình An:</strong> Cảm ơn những chia sẻ bổ ích.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>