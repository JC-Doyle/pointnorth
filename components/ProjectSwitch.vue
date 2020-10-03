<template>
  <div class="project-switch">
    <nuxt-link class="switch-left" :to="'/projects/' + others[0]">
      <img src="~/assets/left-arrow.svg" alt="" height="60%" />
      <h6>{{ others[0] }}</h6>
    </nuxt-link>
    <nuxt-link class="switch-right" :to="'/projects/' + others[1]">
      <h6>{{ others[1] }}</h6>
      <img src="~/assets/right-arrow.svg" alt="" height="60%" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    project() {},
    others() {
      return this.$store.getters.getOtherProjects(this.$route.params.project)
    },
  },
}
</script>

<style scoped>
.project-switch {
  position: relative;
  top: 10%;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 3vmax;
  background-color: rgb(228, 221, 215);
  font-weight: 100;
  font-family: 'Poiret One', sans-serif;
  font-style: italic;
}

.switch-left,
.switch-right {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

img {
  padding: 10px;
}

a {
  text-decoration: none;
  color: rgb(246, 97, 97);
}
</style>