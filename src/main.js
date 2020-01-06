import Vue from 'vue'

// styles 
import './scss/style.scss';

// core
import App from './App.vue'

Vue.config.productionTip = false;
// Código da diretiva
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.filter('dateString', (value, weekday) => {
  if (!value) return "";
  weekday = weekday != undefined ? weekday : true;
  let option = {
    month: "long",
    day: "numeric"
  };
  if (weekday) option.weekday = "long";
  value = new Date(value).toLocaleDateString("en-US", option);
  return value;
})

Vue.filter('timeString', (value) => {
  if (!value) return "";
  let option = {
    hour12: true,
    hour: "numeric",
    minute: "numeric", seconds: "numeric"
  };
  value = new Date(value).toLocaleTimeString("en-US", option);
  return value;
})


new Vue({
  render: h => h(App),
}).$mount('#app')
