<template>
  <section class="project-reader">
    <h1>{{ project.name }}</h1>
    <p>{{ project.intro }}</p>
    <h2>Gallery</h2>
  </section>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.getters.getProjectByName(this.$route.params.project)
    },
  },
}
</script>

<style scoped>
.project-reader {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 5%;
}
h1 {
  font-size: 4em;
  font-weight: 200;
  margin: 30px;
}

h2 {
  font-size: 3em;
  font-weight: 200;
  margin: 20px;
}
p {
  font-size: 24px;
  line-height: 190%;
  font-style: italic;
}
</style>