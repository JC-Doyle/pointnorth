<template>
  <div class="injected-reader">
    <div class="project-header">
      <ProjectSwitch />
      <Talbragar v-if="project.name === 'Talbragar'" />
      <Jameson v-else />
      <h1 class="project-title">{{ project.name }}</h1>
      <Specsheet />
    </div>
    <div class="intro">
      <p>{{ project.intro }}</p>
    </div>
    <div class="catch">
      <img
        class="catch-svg"
        src="~/assets/talbragar-floor.svg"
        alt=""
        width="60%"
      />
      <h3>{{ project.catch }}</h3>
    </div>
    <div class="gallery reader">
      <h2>Gallery</h2>
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
  transition: {
    name: 'slide',
    mode: 'out-in',
  },
}
</script>

<style scoped>
.project-header {
  width: 100%;
  margin-right: 10%;
}
.gallery {
}

.intro,
.gallery {
  background-color: rgb(245, 238, 233);
  box-shadow: 0px 0px 15px 5px rgba(77, 77, 77, 0.01);
  border-color: rgb(155, 145, 145);
  border-width: 1px;
  z-index: 1;
  margin: 5% 5%;
}

.catch {
  margin-top: -5%;
}
h3 {
  margin: 10% 40% 15% 8vw;
  min-width: 600px;
}

p {
  margin-top: 4%;
  padding: 1%;
}

.catch-svg {
  position: absolute;
  right: -2%;
  z-index: -1;
}

.project-title {
  animation: right-in ease 2s;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  overflow: hidden;
}

.slide-leave-active {
  animation: slide-out 0.5s;
  overflow: hidden;
}

@keyframes right-in {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-out {
  0% {
  }
  100% {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>