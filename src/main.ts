import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { AxiosKey, apiClient } from '@/utils/InjectAxios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia().use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.provide(AxiosKey, apiClient)
app.mount('#app')
