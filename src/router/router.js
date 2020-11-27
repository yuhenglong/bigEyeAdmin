import Vue from "vue"
import VRouter from "vue-router"
import login from "@/components/login" 
import dashboard from "@/components/dashboard" 
import InsertList from "@/components/InsertList" 
import SeekInfo from "@/components/SeekInfo" 
Vue.use(VRouter)
export default new VRouter({
    mode: "history",
    routes: [{
        path: "/",
        name: "login",
        component: login
    },{
        path: "/login",
        name: "login",
        component: login
    },{
        path: "/dashboard",
        name: "dashboard",
        component: dashboard,
        children:[{
            path:"/",
            component:InsertList
        },{
            path:"/InsertList",
            component:InsertList
        },{
            path:"/SeekInfo",
            component:SeekInfo
        }]
    }]
})