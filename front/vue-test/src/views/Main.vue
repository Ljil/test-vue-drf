<template>
  <div>
    <div v-for="post in posts" :key="post.title">
      <post :post="post"/>
    </div>
  </div>
</template>

<script>
import Post from "@/components/post";

export default {
  name: "Main",
  components: {Post},
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    fetch(this.$store.state.baseUrl + 'api/posts/', {
      method: 'GET',
    })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response.json()
        })
        .then(data => {
          this.posts = data
        })
        .catch(error => this.error = error)
  }
}
</script>

<style scoped>

</style>