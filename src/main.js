import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



createApp(App).use(router).mount('#app');

