import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import User from '@/components/User'
import createNewUser from '@/components/createNewUser'
import HelloWorld from '@/components/HelloWorld'
import shoppingcart from '@/components/shoppingcart'
import VTSbody from '@/components/VTSbody'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/mytest',
      name: 'shoppingcart',
      component: shoppingcart
    },
    {
      path: '/route/User',
      name: 'User',
      component: User
    },
    {
      path: '/route/createNewUser',
      name: 'createNewUser',
      component: createNewUser
    }


    
  ]
})
