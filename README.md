# REAM Simple Blog

A basic [REAM](https://github.com/ream/ream) example.

## About

This examples uses [jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com/) API to demonstrate:

- Pre-fetching data with Vuex
- Code-split route components
- Custom CSS preprocessor (Stylus)

To run it:

```bash
# First go to this directory
# Install dependencies
yarn 
# Run app in development mode
yarn dev 
# Run it in production mode
yarn build && yarn start
```

Online demo: https://ream-simple-blog.now.sh/

## Folder structure

- `src/index.js`: Entry file, exports factories for creating vue-router and vuex instance.
- `src/router.js`: Exporting a factory function to create vue-router instance.
- `src/store.js`: Exporting a factory function to create vuex instance.
- `src/App.vue`: Exporting a custom root component, here we use it to add some shared CSS across route components.
- `src/views/Home.vue`: Route component for home page `/`.
- `src/views/Post.vue`: Route component for post page: `/post/:id`.