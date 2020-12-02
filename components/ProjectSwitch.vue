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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getOthers: 'projects/getOtherProjects',
    }),
    others() {
      return this.getOthers(this.$route.params.project)
    },
  },
}
</script>

<style scoped>
.project-switch {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 3vmax;
  font-weight: 100;
  font-family: 'Poiret One', sans-serif;
  font-style: italic;
  z-index: 5;
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