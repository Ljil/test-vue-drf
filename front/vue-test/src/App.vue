<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <span v-if="this.$store.state.token">
        <router-link to="/create">Создать пост</router-link> |
      </span>
      <router-link v-if="!this.$store.state.token" to="/login">Login</router-link>
      <a v-else @click="logout">Выйти</a>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.commit('resetAuthToken')
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
