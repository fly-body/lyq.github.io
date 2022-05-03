import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/layout',
    name: 'Layout',
    component: ()=>import('../views/layout/Index.vue'),
    children:[
      {
        path: '/admin',
        name: 'Admin',
        component: ()=> import('../views/admin/Seal.vue')
      },
      {
        path: '/admin/seal',
        name: 'Seal',
        component: ()=> import('../views/admin/Seal.vue')
      },
      {
        path: '/admin/overtime',
        name: 'Overtime',
        component: ()=> import('../views/admin/Overtime.vue')
      },
      {
        path: '/admin/arrears',
        name: 'Arrears',
        component: ()=> import('../views/admin/Arrears.vue')
      },
      {
        path: '/admin/order',
        name: 'Order',
        component: ()=> import('../views/admin/Order.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: ()=> import('../views/user/Info.vue')
      },
      {
        path: '/user/info',
        name: 'Info',
        component: ()=> import('../views/user/Info.vue')
      },
      {
        path: '/user/borrow',
        name: 'Borrow',
        component: ()=> import('../views/user/Borrow.vue')
      },
      {
        path: '/user/note',
        name: 'Note',
        component: ()=> import('../views/user/Note.vue')
      },
      {
        path: '/category',
        name: 'Category',
        component: ()=> import('../views/category/Ground.vue')
      },
      {
        path: '/category/ground',
        name: 'Ground',
        component: ()=> import('../views/category/Ground.vue'),
      },
      {
        path: '/category/score',
        name: 'Score',
        component: ()=> import('../views/category/Score.vue'),
      },
      {
        path: '/category/info',
        name: 'Info',
        component: ()=> import('../views/category/Info.vue'),
      },
      {
        path: '/data',
        name: 'Data',
        component: ()=> import('../views/data/Index.vue')
      },
      {
        path: '/data/index',
        name: 'Index',
        component: ()=> import('../views/data/Index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
