import "babel-polyfill"
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AppLayout from './components/AppLayout'
import router from './router'
import VueFetch from './plugins/fetch'
import './global-components'

Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
});

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router
})
