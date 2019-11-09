import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//将axios绑定到原型上方便使用在个组件中直接this.$http调用
Vue.prototype.$http = axios
    //任意组件之间的通信
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')