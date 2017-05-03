// A function which return a fresh router instance on each request
import createRouter from './router'

// A function which return a fresh store instance on each request
import createStore from './store'

// The root component
// By default it's `<router-view />` in Ream
// Here we use a custom one to add some shared css across pages
import App from './App.vue'

export default { createRouter, createStore, App }