<template>
  <div class="intro">
    <p class="text">{{ project.intro }}</p>
    <div class="images">
      <img
        class="small"
        :src="
          require('../static/' + project.name + '/' + project.name + '-1.jpg')
        "
        alt=""
      />
      <img
        class="big"
        :src="
          require('../static/' + project.name + '/' + project.name + '-2.jpg')
        "
        alt=""
      />

      <img
        class="small"
        :src="
          require('../static/' + project.name + '/' + project.name + '-3.jpg')
        "
        alt=""
      />
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
.intro {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.text {
  position: relative;
  z-index: 3;
}

p::first-letter {
  font-size: 200%;
}

p {
  font-size: 1.6vmax;
  margin: 2vw 8vw;
  text-align: justify;
  color: rgb(75, 75, 75);
}

.images {
  display: flex;
  align-items: center;
}

.small {
  height: 12vw;
  width: 20vw;
}

.big {
  height: 18vw;
  width: 24vw;
  margin: 2vw;
}
@media only screen and (max-width: 800px) {
  p {
    font-size: 18px;
  }

  .text {
    margin: 3% 3% 0 3%;
  }
  img {
    visibility: hidden;
  }
}
</style>
