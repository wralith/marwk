import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { AxiosKey, apiClient } from '@/utils/InjectAxios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide(AxiosKey, apiClient)
app.mount('#app')
