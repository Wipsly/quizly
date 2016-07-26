import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import QuestionOne from './components/questions/QuestionOne.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    history: true
})

// Pointing routes to the components they should use
router.map({
    '/': {
        component: Home
    },
    '/questionone': {
        component: QuestionOne
    }
})

router.start(App, '#app')

