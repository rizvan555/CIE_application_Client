import './assets/tailwind.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);
const vuetify = createVuetify();

app.use(createPinia());
app.use(router);

app.use(vuetify).mount('#app');
AOS.init();
