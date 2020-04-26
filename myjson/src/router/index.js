import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
    path: '/',
    component: () => {
        return import('@/views/editor')
    }
}, {
    path: '/readjson',
    component: () => {
        return import('@/views/readjson')
    }
}, {
    path: '/checkfiles',
    component: () => {
        return import('@/views/checkfiles')
    }
}, {
    path: '*',
    redirect: '/'
}]
export default new Router({
    routes
})