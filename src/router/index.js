import Vue from 'vue'
import Router from 'vue-router'


import Msite from '../pages/Msite/Msite.vue'
import Shop from '../pages/Shop/Shop.vue'
import Profile from '../pages/profile/profile.vue'
import Search from '../pages/search/search.vue'
import See from '../pages/See/See.vue'
import Faxian from '../pages/See/Faxian.vue'
import Zhenxuanjia from '../pages/See/Zhenxuanjia.vue'


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
      meta:{
        showFooter:true
      }
    },
    {
      path: '/shop',
      component: Shop,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:false
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/see',
      component: See,
      redirect:'/see/faxian',
      children:[
        {
          path:'/see/faxian',
          component:Faxian,
        },
        {
          path:'/see/zhenxuanjia',
          component:Zhenxuanjia
        }
      ],
      meta:{
        showFooter:true
      }
    }
  ]
})
