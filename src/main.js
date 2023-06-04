


import App from './App.vue'

createApp(App).mount('#app')


// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import router from './router'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
//import App from './App.vue'

const myApp = createApp(App)
const pinia = createPinia()
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
myApp.use(pinia)
myApp.use(router)
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
