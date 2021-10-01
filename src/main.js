import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 576,
    tablet: 768,
    ipad: 992,
    laptop: 1200,
    desktop: 1600,
    xlscreen: Infinity,
  },
});
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
