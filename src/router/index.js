import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/account',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/account',
        component: () => import('../components/Account.vue')
      },
      {
        path: '/classroom',
        component: () => import('../components/SubjectList.vue')
      },
      {
        path: '/classroom/:id',
        props: true,
        component: () => import('../components/SubjectRoom.vue')
      },
      {
        path: '/submit',
        component: () => import('../components/Submit.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
