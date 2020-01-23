import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import VueProgress from 'vue-progress'

Vue.use(VueProgress)

library.add(faEnvelope)
library.add(faFacebook)
library.add(faInstagram)
library.add(faGithub)
library.add(faLinkedin)

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSimpleMarkdown)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
