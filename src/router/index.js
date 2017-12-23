import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Profile from '@/components/Profile'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/profile',
      component: Profile,
      children: [
        {
          path: '/',
          name: 'Me',
          component: Me
        },
      ]
    }
  ]
})
