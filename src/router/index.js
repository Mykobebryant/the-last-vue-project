import Vue from 'vue'
import Router from 'vue-router'


import Msite from '../pages/Msite/Msite.vue'
import Shop from '../pages/Shop/Shop.vue'
import Profile from '../pages/profile/profile.vue'
import Search from '../pages/search/search.vue'
import See from '../pages/See/See.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect:'/msite',
    },
    {
      path: '/msite',
      component: Msite,
      meta:{}
    },
    {
      path: '/shop',
      component: Shop,
      meta:{}
    },
    {
      path: '/profile',
      component: Profile,
      meta:{}
    },
    {
      path: '/search',
      component: Search,
      meta:{}
    },
    {
      path: '/see',
      component: See,
      meta:{}
    }
  ]
})
