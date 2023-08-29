import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from './components/ChatRoom.vue'
import PhoneForm from './components/PhoneForm'
const routes = [
       {path:'/',component:PhoneForm},
       {path:"/chatRoom",component:ChatRoom}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
