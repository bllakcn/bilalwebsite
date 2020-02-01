import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Project from '../views/Project.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import Blogs from '../views/Blogs.vue'

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
    component: Projects,
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/portfolio/:slug',
    name: 'project',
    component: Project
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blogs
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
