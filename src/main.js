import './assets/main.css'
import "./tailwind.css"
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCode, faDownload, faLanguage, faMicrochip, faMobile, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
// app.use(createPinia())
// app.use(router)
library.add(faGithub, faTelegram, faLinkedin, faCode, faClock, faMobile, faMicrochip, faUser, faLanguage, faBars, faXmark, faDownload)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
  .use(ToastPlugin)

