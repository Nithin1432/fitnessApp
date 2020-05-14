import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './router';
import EasySlider from 'vue-easy-slider';
import Vuelidate from 'vuelidate'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import AsyncComputed from 'vue-async-computed'

const SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(EasySlider);

Vue.use(SocialSharing);

Vue.use(AsyncComputed)

Vue.use(Vuelidate);
Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

