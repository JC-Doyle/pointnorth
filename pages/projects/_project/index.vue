<template>
  <div class="project-reader">
    <section>
      <ProjectHeader />
    </section>
    <section>
      <ProjectIntro />
    </section>
    <section>
      <ProjectSpecs />
    </section>
    <section>
      <h2>Gallery</h2>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'default',
  computed: {
    ...mapGetters({
      getProject: 'projects/getProjectByName',
    }),
    project() {
      return this.getProject(this.$route.params.project)
    },
  },
  transition: {
    name: 'slide',
    mode: 'out-in',
  },
}
</script>

<style scoped>
.project-reader {
  overflow: scroll;
  scroll-behavior: smooth;
  max-height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-snap-stop: always;
}

section {
  position: relative;
  padding: 2vw;
  height: 100vh;
  scroll-snap-align: center;
}

p {
  margin-top: 4%;
  padding: 1%;
}

.project-title,
.intro {
  animation: right-in ease 1.5s;
}

@keyframes down-out {
  0% {
    transform: translateY(0x);
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

@keyframes up-in {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.slide-enter-active {
  animation: up-in 1s;
}

.slide-leave-active {
  animation: down-out 1s;
}

.slide-leave,
.slide-enter {
  opacity: 0;
}

@media only screen and (max-width: 800) {
  .catch {
    margin: 20px;
  }
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
</style>