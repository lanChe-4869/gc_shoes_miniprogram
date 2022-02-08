
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import share from './js/share.js'

Vue.config.productionTip = false
Vue.mixin(share)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif