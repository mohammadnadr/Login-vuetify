/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

//i18
import { createI18n } from 'vue-i18n';
import messages from '@/utils/locales/messages';

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'fa',
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true
});
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

// ایجاد global mixin
app.mixin({
  computed: {
    $t() {
      return (key: string) => {
        return i18n.global.t(key);
      };
    }
  }
});
app.use(i18n);


registerPlugins(app)

app.mount('#app')
