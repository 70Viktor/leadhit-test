import { createRouter, createWebHistory } from 'vue-router'
import AnalyticsView from '@/views/AnalyticsView/AnalyticsView'
import AuthorizationView from '@/views/AuthorizationView/AuthorizationView'

const routes = [
  {
    path: '/authorization',
    name: 'authorization',
    component: AuthorizationView
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsView,
    meta: {
      requiresAuth: true
    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  to.matched.some((record) => {
    if ( record.meta.requiresAuth && !localStorage.getItem('leadhit-site-id') ) {
      next('/authorization')
      alert('Необходимо авторизоваться')
    } else {
      next()
    }
  })
})


export default router
