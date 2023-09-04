import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from './components/ChatRoom.vue'
// import PhoneForm from './components/PhoneForm'
import MainPage from './components/MainPage'
import Cookies from 'js-cookie'
const routes = [
       {path:'/',component:MainPage},
       {path:"/chatRoom",component:ChatRoom,
        beforeEnter: (to, from, next) => {
            // ...
            if(isAuthenticated()){
                console.log("inside if")
                next()
            }
            else{
                console.log("inside else")
                next('/')
            }
        }}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

function isAuthenticated(){
    console.log("inside auh")
    const token=Cookies.get('token')
    return !!token
}

export default router
