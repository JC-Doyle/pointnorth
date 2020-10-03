<template>
  <div class="specsheet">
    <ul class="date">
      <li>{{ project.constructed }}</li>
    </ul>
    <ul class="location">
      <li>{{ project.location }}</li>
    </ul>
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
.specsheet {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  float: right;
  text-align: right;
  right: 5%;
  bottom: 10%;
  text-decoration: none;
  list-style: none;
}

.date {
  color: rgb(246, 97, 97);
  font-size: 2vmax;
  font-weight: 800;
  font-family: 'Poiret One', sans-serif;
}

.location {
  font-size: 2vmax;
  margin-top: -14px;
  font-weight: 100;
  color: #3a3a3a;
  font-style: oblique;
}
ul {
  list-style: none;
}
</style>