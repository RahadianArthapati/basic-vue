// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(iView);
/* eslint-disable no-new */
  new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
