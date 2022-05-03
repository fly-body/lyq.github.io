import Vue from 'vue'
import App from './App.vue'
import router from './router'

/**网络请求 */
import axios from 'axios'
Vue.prototype.$axios = axios

/**引入第三方插件 */
import './plugins/element.js'

/**引入样式(图表样式/iconfont样式/全局样式) */
import './assets/css/global.css'
import './assets/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  render: h => h(App)
}).$mount('#app')
