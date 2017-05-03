<template>
  <div class="page">
    <div class="anchor">
      <router-link class="back-button" to="/">← Back Home</router-link>
    </div>
    <h2>{{ post.title }}</h2>
    <div class="post-body" v-html="post.body"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    preFetch({ store, route }) {
      return store.dispatch('fetchPost', route.params.id)
    },
    head() {
      return {
        title: `${this.post.title} - Ream Simple Blog`
      }
    },
    computed: mapState(['post'])
  }
</script>

<style scoped lang="stylus">
  .anchor
    margin-top: 20px

  .back-button
    color: #333
    border: 1px solid @color
    display: inline-block
    border-radius: 4px
    padding: 5px 10px
    font-size: 12px
</style>