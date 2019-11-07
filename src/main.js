import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import color from './constants/color'
import * as VueGoogleMaps from 'vue2-google-maps'
import './styles/color.css'
import axios from 'axios'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAvAEiAWg5YfiN0DyGb480cWQ2JDxnKFI4',
        libraries: 'places' // necessary for places input
    }
})

Vue.config.productionTip = false
Vue.prototype.$color = color
Vue.prototype.$axios = axios

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
