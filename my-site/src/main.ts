import { createApp } from 'vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from '/@/App.vue';
import '/@/styles/index.scss';

const app = createApp(App);

app.use(Antd);

app.mount('#app');
