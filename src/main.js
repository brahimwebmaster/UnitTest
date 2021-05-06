import Vue from 'vue'
import Posts from './components/Posts.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Posts),
}).$mount('#app')
