import Vue from 'vue'
// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from "@/router/router"

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')