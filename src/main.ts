import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore
import sanitizeEmail from "sanitize-email";
import './assets/main.css'

createApp(App).use(sanitizeEmail).mount('#app')
