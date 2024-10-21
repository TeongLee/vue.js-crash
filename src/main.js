import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//use the router
app.use(router)

//use Toast (like a pop up notification)
app.use(Toast)

app.mount('#app')
