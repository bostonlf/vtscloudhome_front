import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import VTShomepage from '@/components/VTShomepage'
import Person from '@/components/Person'
import PersonDetail from '@/components/PersonDetail'
import Adminstration from '@/components/VTSadminstration'
import AdminCompany from '@/components/AdminCompany'
import VTSbody from '@/components/VTSbody'
import User from '@/components/User'
import createNewUser from '@/components/createNewUser'
import ExistingUser from '@/components/ExistingUser'
import HelloWorld from '@/components/HelloWorld'
import shoppingcart from '@/components/shoppingcart'
import Pleaselogin from '@/components/Pleaselogin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VTShomepage',
      component: VTShomepage
    },
    {
      path: '/route/VTShomepage',
      name: 'VTShomepage',
      component: VTShomepage
    },
    {
      path: '/route/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/route/PersonDetail',
      name: 'PersonDetail',
      component: PersonDetail
    },
    {
      path: '/route/Request',
      name: 'Request',
      component: VTShomepage
    },
    {
      path: '/route/TaskProfile',
      name: 'TaskProfile',
      component: VTShomepage
    },
    {
      path: '/route/Task',
      name: 'Task',
      component: VTShomepage
    },
    {
      path: '/route/Adminstration',
      name: 'Adminstration',
      component: Adminstration
    },
    {
      path: '/route/AdminCompany',
      name: 'AdminCompany',
      component: AdminCompany
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
    },
    {
      path: '/route/ExistingUser',
      name: 'ExistingUser',
      component: ExistingUser
    },
    {
      path: '/Pleaselogin',
      name: 'Pleaselogin',
      component: Pleaselogin
    },
    { path: '/hi1', name: 'hi1', component: ExistingUser }
  ]
})
