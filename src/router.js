import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/view/Home.vue"
import Member from "./components/view/Member.vue"
import Order from "./components/view/Order.vue"
import Mine from "./components/view/Mine.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Member',component:Member},
    {path:'/Order',component:Order},
    {path:'/Mine',component:Mine},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer}
  ]
})
