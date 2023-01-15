import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
// import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);

// applyPolyfills().then(() => {
//     defineCustomElements(window);
//   });

// const app = createApp(App).use(store).use(router)
// app.config.compilerOptions.isCustomElement = tag => tag.startsWith('amplify-');
// app.mount('#app');

createApp(App).use(store).use(router).mount('#app')

