import Vue from 'vue'
import VueRouter from 'vue-router'
import page from './src/App.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        components: page
    }
]


const router = new VueRouter({
    routes
})

export default router