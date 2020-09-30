<template>
  <div v-if="this.$store.state.projectsExpanded" class="project-list">
    <h6
      class="project-item"
      v-for="project in projects"
      :key="project.name"
      :page="project.name"
    >
      <nuxt-link :to="'/projects/' + project.name">{{
        project.name
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
  methods: {
    Clicked: function () {
      this.$store.commit('toggleProject')
    },
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.project-list {
  margin: 15px;
}
h6 {
  font-size: 28px;
  margin: 10px;
  font-weight: 200;
  font-style: italic;
}

a {
  text-decoration: none;
  color: rgb(53, 53, 53);
}
</style>

