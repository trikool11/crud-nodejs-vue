import Vue from 'vue'
import App from './App.vue'
import './config/vuetify'
import router from './router'

// config axios
const axios = require('./config/vue-axios')
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    mounted() {
        console.log('mounted');        
    },
})