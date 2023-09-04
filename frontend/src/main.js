import { createApp } from 'vue'
import App from './App.vue'
// import router from './routes'
import routes from './routes'

const app=createApp(App)
app.use(routes)
app.mount('#app')
// app.use(router)

