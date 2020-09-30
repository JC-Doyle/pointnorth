<template>
  <div class="injected-reader">
    <div class="project-header">
      <img class="header-svg" src="~/assets/talbragar.svg" alt="" width="60%" />
      <h1>{{ project.name }}</h1>
      <Specsheet />
    </div>
    <div class="intro">
      <p>{{ project.intro }}</p>
    </div>
    <div class="catch">
      <img
        class="catch-svg"
        src="~/assets/talbragar-floor.svg"
        alt=""
        width="60%"
      />
      <h3>{{ project.catch }}</h3>
    </div>
    <div class="gallery reader">
      <h2>Gallery</h2>
    </div>
  </div>
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
.project-header {
  width: 100%;
  margin-right: 10%;
}
.gallery {
}

.intro {
  background-color: #f2f4f5;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  z-index: 1;
  margin-top: 20px;
}

.catch {
  margin-top: -5%;
}
h3 {
  margin: 10% 40% 15% 8vw;
  min-width: 600px;
}

p {
  margin-top: 4%;
  padding: 1%;
}

.catch-svg {
  position: absolute;
  right: -2%;
  z-index: -1;
}

.gallery {
  width: 100%;
  background-color: #f2f4f5;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  z-index: 1;
  margin-top: 20px;
  height: 400px;
}
</style>