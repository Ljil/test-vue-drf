<template>
  <div>
    <form @submit.prevent="login">
      <p><input v-model="username" placeholder="username"></p>
      <p><input v-model="password" type="password" placeholder="password"></p>
      <p v-if="!token">
        <button>Войти</button>
      </p>

    </form>
    <br>
    <p v-if="token">
        <button @click="logout()">Выйти</button>
      </p>
    <p v-if="token">
      Token: {{ token }}
    </p>
    <p v-if="error && !token">Error: {{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: '',
      password: '',
      token: localStorage.getItem('token'),
      error: ''
    };
  },
  methods: {
    login() {
      const url = "http://localhost:8000/api-token-auth/"
      const data = {
        username: this.username,
        password: this.username,
      }
      fetch(url, {
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
            this.token = data.token
            localStorage.setItem('token', data.token)
          })
          .catch(error => this.error = error)
    },
    logout() {
      localStorage.removeItem('token')
      this.token = ''
    }
  }
};
</script>
