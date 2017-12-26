import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Profile from '@/components/Profile'
import Me from '@/components/Me'
import Education from '@/components/Education'
import Work from '@/components/Work'
import Projects from '@/components/Projects'
import Activities from '@/components/Activities'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
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
        {
          path: '/education',
          name: 'Education',
          component: Education
        },
        {
          path: '/work',
          name: 'Work',
          component: Work
        },
        {
          path: '/projects',
          name: 'Projects',
          component: Projects
        },
        {
          path: '/activities',
          name: 'Activities',
          component: Activities
        },
      ]
    }
  ]
})
