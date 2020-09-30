<template>
  <div class="specsheet">
    <div class="left">
      <ul class="spec">
        <li>Location</li>
        <li>Build Period</li>
      </ul>
      <ul class="detail">
        <li>{{ project.location }}</li>
        <li>{{ project.constructed }}</li>
      </ul>
    </div>
    <div class="right">
      <ul class="spec">
        <li>Units Built</li>
        <li>Build Costs</li>
      </ul>
      <ul class="detail">
        <li>{{ project.stands }}</li>
        <li>{{ project.costs }}</li>
      </ul>
    </div>
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
.left,
.right {
  display: flex;
  flex-direction: row;
  background-color: #f2f4f5;
  z-index: 2;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  margin-left: 10px;
  padding: 5px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
}

.specsheet {
  display: flex;
  justify-content: flex-end;
  padding-left: 20%;
  margin-bottom: 20px;
  margin-top: 10px;
}

.detail {
  text-align: right;
}

.spec {
  color: rgb(93, 93, 93);
  font-style: italic;
}

li {
  text-decoration: none;
  list-style: none;
  margin: 15px;
  font-size: 16pt;
}
ul {
  list-style: none;
  padding: 0;
}
</style>