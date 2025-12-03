<template>
  <div>
    <h1>Danh sách Blog</h1>
    <ul>
      <li v-for="n in 5" :key="n">
        <router-link :to="{ name: 'BlogPost', params: { id: n }}">
          Bài viết số {{ n }}
        </router-link>
      </li>
    </ul>
  </div>
</template>