import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: {
      posts: [],
      post: null
    },
    mutations: {
      FETCH_POSTS(state, posts) {
        state.posts = posts
      },
      FETCH_POST(state, post) {
        state.post = post
      }
    },
    actions: {
      async fetchPosts({ commit }) {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.data)
        commit('FETCH_POSTS', data)
      },
      async fetchPost({ commit }, id) {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(res => res.data)
        commit('FETCH_POST', data)
      }
    }
  })

  return store
}