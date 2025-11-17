// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// import"bootstrap/dist/css/bootstrap.min.css"
// import"bootstrap/dist/js/bootstrap.bundle.min.js"


// import router from './router'

// const app = createApp(App)

// app.use(router)

// createApp(App).mount('#app')

import { createApp } from 'vue'

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import './style.css'

// Import JS của Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import App và Router
import App from './App.vue'
import router from './router' // <-- BƯỚC 1: BẠN PHẢI IMPORT ROUTER

const app = createApp(App)

app.use(router) // <-- BƯỚC 2: BẠN PHẢI "USE" ROUTER
app.mount('#app')
