import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApplication, addErrorHandler, start } from 'single-spa'
import apps from './applications'

import './plugins/antd'

Vue.config.productionTip = false

// 注册子应用
for (let i = apps.length - 1; i >= 0; i--) {
  registerApplication(apps[i])
}

new Vue({
  router,
  store,
  mounted() {
    addErrorHandler(this.appErrorHandler)
    start()
  },
  methods: {
    appErrorHandler(error) {
      this.$nextTick(() => {
        router.replace({ name: '404', query: { message: error.message }})
      })
    }
  },
  render: h => h(App)
}).$mount('#app')
