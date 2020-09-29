<template>
  <div class="nav">
    <nuxt-link to="/">
      <h5>About</h5>
    </nuxt-link>
    <h5 @click="toggleProject">Projects</h5>
    <ProjectNav />
    <nuxt-link to="/team">
      <h5>The Team</h5>
    </nuxt-link>
  </div>
</template>

<script >
import ProjectNav from './ProjectNav.vue'

export default {
  components: {
    ProjectNav,
  },
  name: 'PageNav',
  props: {
    page: String,
  },
  methods: {
    changePage: function () {
      this.$store.commit('changePage', { page: this.page })
    },
    toggleProject: function () {
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
<style scoped>
.nav-item {
  opacity: 1;
  font-size: 24px;
  font-weight: 200;
  margin: 10px;
  justify-self: center;
}

.nav {
  text-align: center;
}

h5 {
  cursor: pointer;
  font-size: 32px;
  margin: 10px;
  font-weight: 300;
  color: #1f262a;
}
</style>
