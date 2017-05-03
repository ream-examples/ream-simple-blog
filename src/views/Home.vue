<template>
  <div class="page">
    <h1>Ream Simple Blog</h1>
    <p>
      This is a server-rendered app built with Vue & Ream, see the source code at <a href="https://github.com/ream-examples/ream-simple-blog" target="_blank">https://github.com/ream-examples/ream-simple-blog</a>
    </p>
    <h2>Post List</h2>
    <ul class="post-list">
      <li v-for="post in posts">
        <h3>
          <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    head: {
      title: 'Home - Ream Simple Blog'
    },
    preFetch({ store }) {
      return store.dispatch('fetchPosts')
    },
    computed: mapState(['posts'])
  }
</script>

<style scoped lang="stylus">
  .post-list
    list-style: square
    padding-left: 20px
</style>