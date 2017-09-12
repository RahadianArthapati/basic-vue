import Vue from 'vue'
import Router from 'vue-router'

import Artist from '@/components/Artist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Artist',
      component: Artist
    }
  ]
})
