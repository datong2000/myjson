import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
    path: '/',
    component: () => {
        return import('@/views/editor')
    }
}, {
    name: 'readjson',
    path: '/readjson',
    component: () => {
        return import('@/views/readjson')
    }
}]
export default new Router({
    routes
})