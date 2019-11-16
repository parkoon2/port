import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import color from './constants/color'
import * as VueGoogleMaps from 'vue2-google-maps'
import './styles/color.css'
import axios from 'axios'
import VueTyperPlugin from 'vue-typer'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-sine', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom'
})

Vue.use(VueTyperPlugin)
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
