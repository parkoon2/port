import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import color from './constants/color'
import './styles/color.css'

Vue.config.productionTip = false
Vue.prototype.$color = color

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
