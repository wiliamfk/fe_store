import './assets/style.css';
import '@fontsource/roboto';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';

library.add(fas);

const app = createApp(App);

app.component('fa-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);
// app.use(PerfectScrollbarPlugin);
app.use(VueAxios, axios);

app.mount('#app');
