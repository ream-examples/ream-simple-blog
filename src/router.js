import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function useProgressBar(router) {
  // Only add progress on client-side
  if (process.browser) {
    const nprogress = require('nprogress')
    require('nprogress/nprogress.css')

    router.beforeEach((to, from, next) => {
      nprogress.start()
      next()
    })

    router.afterEach(() => {
      nprogress.done()
    })
  }
}

export default () => {
  const router = new Router({
    mode: 'history',
    routes: [{
      // Home page
      path: '/',
      component: () => import('./views/Home.vue')
    }, {
      // Post page
      path: '/post/:id',
      component: () => import('./views/Post.vue')
    }]
  })

  useProgressBar(router)

  return router
}