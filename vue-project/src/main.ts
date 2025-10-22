import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 4.3步骤：注释原预设CSS，使用App.vue中的全局样式
// import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
