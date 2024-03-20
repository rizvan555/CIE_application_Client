import './assets/tailwind.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueTypewriterEffect from 'vue-typewriter-effect';
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import QrStream from './components/QrStream.vue';
import QrDropzone from './components/QrDropzone.vue';
import QrCapture from './components/QrCapture.vue';

const app = createApp(App);
const vuetify = createVuetify();

app.use(createPinia());
app.use(router);

app
  .use(vuetify)
  .component('vue-typewriter-effect', VueTypewriterEffect)
  .mount('#app');
AOS.init();
app.use(DatePicker);
