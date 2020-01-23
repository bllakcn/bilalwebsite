import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Project from '../views/Project.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: About  
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
    children:[
      {
        path: '',
        name: 'projects',
        component: Projects
      },
      {
        path: ':slug',
        name: 'project',
        component: Project
      },
    ]
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
