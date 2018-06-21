import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

import AboutUs from '@/components/AboutUs'
import Gallery from '@/components/Gallery'

import test from '@/components/Test'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
