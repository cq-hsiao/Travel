// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
/* 重置页面样式表 统一不同手机的页面样式 */
import './assets/styles/reset.css'
/* 解决1像素边框问题 */
import './assets/styles/border.css'

Vue.config.productionTip = false
/* 解决移动端300毫秒点击事件延迟
 * cnpm install fastclick --save */
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
