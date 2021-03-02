<template>
  <div v-if="this.$store.state.token">
    <h1>Создание нового поста</h1>
    <p>
      <label for="post_title">Заголовок </label>
      <input id="post_title" v-model="title" placeholder="Заголовок"/>
    </p>
    <p>
      <label for="post_text">Текст </label>
      <input id="post_text" v-model="text" placeholder="Текст"/>
    </p>
    <button @click="create">Создать</button>
  </div>
  <div v-else>Нужно авторизоваться</div>
</template>

<script>
export default {
  name: "PostCreate",
  data() {
    return {
      title: "",
      text: ""
    }
  },
  methods: {
    create() {
      const data = {
        title: this.title,
        text: this.text,
      }
      console.log('Token ' + this.$store.state.token)
      console.log(this.$store.state.baseUrl + 'api/posts/')
      console.log(JSON.stringify(data))
      fetch(this.$store.state.baseUrl + 'api/posts/', {
        method: 'POST',
        cache: "no-cache",
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Accept': '*/*',
          'Authorization': 'Token ' + this.$store.state.token
        },
        body: JSON.stringify(data)
      })
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText)
            } else {
              this.$router.push({path: '/'})
            }
          })
          .catch(error => alert(error))
    }
  }
};
</script>
