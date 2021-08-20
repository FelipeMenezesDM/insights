import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddInsight from '../views/AddInsight.vue'
import ViewInsight from '../views/ViewInsight'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-insight',
    name: 'AddInsight',
    component: AddInsight,
    meta: {title: 'Criar', highlightTitle: 'Insight'}
  },
  {
    path: '/edit-insight/:id',
    name: 'EditInsight',
    component: AddInsight,
    meta: {title: 'Editar', highlightTitle: 'Insight'}
  },
  {
    path: '/view-insight/:id',
    name: 'ViewInsight',
    component: ViewInsight,
    meta: {title: 'Visualizar', highlightTitle: 'Insight'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
