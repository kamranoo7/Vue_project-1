// 1. Define route components.
// These can be imported from other files

//const About = { template: '<div>About</div>' }
import Home from "./Views/Home.vue"
import Admin from "./Views/Admin.vue"
import ProductDetails from "./Views/ProductDetails.vue"
import Order from "./Views/order.vue"
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  {path:"/admin",component:Admin},
  {path:"/productdetails/:id",component:ProductDetails},
  {path:"/order",component:Order }
]

import {createRouter,createWebHistory} from "vue-router"
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router)

// app.mount('#app')
export default router

// Now the app has started!