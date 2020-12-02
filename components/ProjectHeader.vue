<template>
  <div>
    <SvgHeader class="svg" :page="project.name" />
    <ProjectSwitch />
    <h1 class="project-title">{{ project.title }}</h1>
    <div class="project-datetime">
      <h3 class="date">{{ project.date }}</h3>
      <h3 class="location">{{ project.location }}</h3>
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
h1 {
  font-size: 11vw;
  color: #3a3a3a;
  font-weight: bold;
  margin-right: 4vw;
  text-align: right;
  position: relative;
  float: top;
}

h3 {
  font-size: 3vmin;
  font-weight: 300;
  font-style: italic;
  line-height: 80%;
  margin: 0 4% 0 0;
  font-family: 'Poiret One', sans-serif;
  margin: none;
  text-align: right;
}

.project-datetime {
  position: absolute;
  width: 40%;
  bottom: 8vw;
  right: 4vw;
}

.date {
  font-size: 6vmin;
  color: rgb(246, 97, 97);
  font-style: normal;
}

.location {
  padding-right: 1vw;
  font-size: 4vmin;
}

.svg {
  z-index: -1;
}
</style>