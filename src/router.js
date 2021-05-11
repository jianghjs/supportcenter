import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import FQA from './components/FQA'
import VueFetch from './plugins/fetch'

Vue.use(VueRouter)
Vue.use(VueFetch)

const routes =[
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/FQA',
        name: 'fqa',
        component: FQA
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router