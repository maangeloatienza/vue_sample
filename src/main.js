import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://52.74.76.145:8084/v1/';

export const bus = new Vue();

const router = new VueRouter({
  routes : Routes,
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})
