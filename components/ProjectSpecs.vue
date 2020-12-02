<template>
  <div>
    <SvgInlay class="svg" :page="project.name" />
    <div class="specs">
      <h3>{{ project.catch }}</h3>
      <ul class="speclist">
        <li>{{ project.units }}</li>
        <li>{{ project.size }}</li>
        <li>{{ project.rooms }}</li>
        <li>{{ project.period }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getProject: 'projects/getProjectByName',
    }),
    project() {
      return this.getProject(this.$route.params.project)
    },
  },
}
</script>

<style scoped>
.specs {
  display: flex;
  flex-direction: column;
}
h3 {
  font-size: 3.4vmax;
  font-style: italic;
  font-weight: bold;
  z-index: 6;
  margin: 4vw 20vw 1vw 2vw;
}

li {
  list-style: none;
  font-size: 2.4vmax;
  line-height: 250%;
  font-family: 'Poiret One';
  color: rgb(246, 97, 97);
}

.speclist {
  position: absolute;
  bottom: 10vh;
}
</style>