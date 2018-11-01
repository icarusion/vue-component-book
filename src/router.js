import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/form',
            component: () => import('./views/form.vue')
        },
        {
            path: '/checkbox',
            component: () => import('./views/checkbox.vue')
        },
        {
            path: '/',
            component: () => import('./views/index.vue')
        }
    ]
})
