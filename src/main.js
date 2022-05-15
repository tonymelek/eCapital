import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'
import OnboardingCheckListVue from './components/OnboardingCheckList.vue'
import SignInVue from './components/SignIn.vue'
import AdminPage from './components/AdminPage.vue'

const routes = [
    { path: '/', component: SignInVue },
    { path: '/admin', component: AdminPage },
    { path: '/onboarding', component: OnboardingCheckListVue },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router);
app.mount('#app')
