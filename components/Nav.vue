<template>
  <div class="nav">
    <nuxt-link to="/">
      <NavSelect page="About" route="index" />
    </nuxt-link>
    <NavSelect page="Projects" route="projects-project" />
    <nuxt-link to="/team">
      <NavSelect page="The Team" route="team" />
    </nuxt-link>
  </div>
</template>

<script >
import { mapGetters } from 'vuex'
export default {
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  text-align: center;
  margin: 1.2vw;
}
</style>
