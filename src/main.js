import Vue from 'vue'
import AppLayout from './components/AppLayout'
import router from './router'
import "babel-polyfill"

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router
})
