import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import layui from 'vue-lay';
import 'vue-lay/lib/vue-lay.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;
Vue.use(layui);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
