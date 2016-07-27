import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import QuestionOne from './components/questions/QuestionOne.vue'

import VueRouter from 'vue-router'

import VueSimpleStore from './store/vue-simple-store.js'
import Points from './store/points.js'

Vue.use(VueSimpleStore, {
	stores: [Points]
})
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

