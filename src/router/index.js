import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContent from '../views/HomeContent.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import GamePage from '@/views/GamePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeContent',
    component: HomeContent
  },
  {
    path: '/game',
    name: 'GamePage',
    component: GamePage
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
