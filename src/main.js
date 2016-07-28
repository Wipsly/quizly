import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Jumbo from './components/Jumbo.vue'

import VueRouter from 'vue-router'

import VueSimpleStore from './store/vue-simple-store.js'
import Points from './store/points.js'

Vue.use(VueSimpleStore, {
	stores: [Points]
})
Vue.use(VueRouter)

Vue.transition('fade', { 
	enterClass: 'lightSpeedIn',
	leaveClass: 'lightSpeedOut'
})

const router = new VueRouter({
    history: true
})

// Pointing routes to the components they should use
router.map({
    '/': {
        component: Home
    },
    '/question': {
        component: Jumbo
    }
})

router.start(App, '#app')

