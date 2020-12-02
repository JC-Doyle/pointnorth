<template>
  <div v-if="this.$store.state.projectsExpanded" class="project-nav">
    <div class="nav-background"></div>
    <div class="nav-box"></div>
    <h6
      class="project-item"
      v-for="project in projects"
      :key="project.name"
      :page="project.name"
      :class="{ current: path.includes(project.name) }"
    >
      <nuxt-link :to="'/projects/' + project.name">{{
        project.title
      }}</nuxt-link>
    </h6>
  </div>
</template>

<script>
export default {
  name: 'ProjectNav',
  props: {
    page: String,
  },
  data() {
    return {}
  },
  computed: {
    projects() {
      return this.$store.state.projects.projects
    },
    path() {
      return this.$route.path
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.project-nav {
  position: relative;
  float: top;
  width: 70%;
  left: 15%;
  margin-top: -10px;
  padding: 0.1vw 0vw;
}

h6 {
  font-size: 1.1vw;
  margin: 0.8vw 1vw;
  font-weight: 300;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  font-weight: 500;
}

.current {
  color: rgb(233, 49, 85);
  font-weight: 500;
}
</style>

