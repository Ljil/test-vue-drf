<template>
  <div>
    <form @submit.prevent="login">
      <p><label for="login">Логин: </label><input id="login" v-model="username" placeholder="username"></p>
      <p><label for="password">Пароль: </label><input id="password" v-model="password" type="password" placeholder="password"></p>
      <p v-if="!this.$store.state.token">
        <button>Войти</button>
      </p>

    </form>
    <br>
<!--    <p v-if="this.$store.state.token">-->
<!--      <button @click="logout">Выйти</button>-->
<!--    </p>-->
    <p v-if="this.$store.state.token">
      Token: {{ this.$store.state.token }}
    </p>
    <p v-if="error && !this.$store.state.token">Error: {{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.username,
      }
      fetch(this.$store.state.baseUrl + 'api-token-auth/', {
        method: 'POST',
        cache: "no-cache",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      })
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText)
            }
            return response.json()
          })
          .then(data => {
            localStorage.setItem('token', data.token)
            this.$store.state.token = data.token
          })
          .catch(error => this.error = error)

      this.$router.push({ path: '/' })
    },
  }
};
</script>
