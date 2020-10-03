<template>
  <div v-if="this.$store.state.projectsExpanded" class="project-nav">
    <div class="nav-background"></div>
    <div class="nav-box"></div>
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
.project-nav {
  position: relative;
  float: top;
  top: -10px;
}

.nav-box {
  border-style: solid;
  border-width: 1px;
  border-color: rgb(141, 137, 137);
  position: absolute;
  float: top;
  height: 170px;
  width: 54%;
  left: 23%;
  top: -40%;
  z-index: -2;
}

.nav-background {
  background-color: rgb(228, 221, 215);
  position: absolute;
  float: top;
  height: 180px;
  width: 50%;
  left: 25%;
  top: -44%;
  z-index: -1;
}

h6 {
  font-size: 24px;
  margin: 1vw;
  font-weight: 200;
  font-style: italic;
}

a {
  text-decoration: none;
  color: rgb(53, 53, 53);
}
</style>

