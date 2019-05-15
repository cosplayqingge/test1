
import Vue from 'vue'
import App from './App.vue'

import './assets/css/common.css'
import 'font-awesome/css/font-awesome.min.css' 

import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render:h=>h(App)
}).$mount('#app')