<template>
  <div class="postContainer">
    <h1>{{ post.title }}</h1>
    <p>{{ post.text }}</p>
    <hr>
    <p>{{ post.author }} | {{ post.created_at }}</p>
  </div>
</template>

<script>
export default {
  name: "post",
  props: ['post']
}
</script>

<style scoped>
.postContainer {
  background-color: azure;
  border-radius: 5px;
  margin: 1rem auto;
  padding: 1rem 4rem;;
}

.postContainer p {
  text-align: left
}
</style>