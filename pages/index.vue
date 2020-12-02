<template>
  <div class="injected-reader">
    <div class="header">
      <SvgHeader :page="project.toLowerCase()" />
      <h1>Developing {{ word }} homes</h1>
      <h2>{{ project }}</h2>
    </div>
    <div class="about">
      <p>
        Established in 2013, Point North Properties is a dynamic and innovative
        residential property development company based in Johannesburg, South
        Africa. We focus on select new-build developments in some of the city’s
        premier residential suburbs on behalf of clients seeking a turn-key and
        end-to end home ownership solution. We deliver bespoke projects for
        clients seeking safe and high-quality living – the projects typically
        range from two to eight free-hold residential homes per development. We
        focus on select new-build developments in some of the city’s premier
        residential suburbs on behalf of clients seeking a turn-key and end-to
        end home ownership solution. We deliver bespoke projects for clients
        seeking safe and high-quality living – the projects typically range from
        two to eight free-hold residential homes per development.
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'default',
  computed: {
    project() {
      return this.$store.state.landing.project
    },
    word() {
      return this.$store.state.landing.word
    },
  },
  methods: {
    newPage() {
      this.interval = setInterval(() => {
        this.$store.commit('landing/nextProject')
        console.log('projectChange')
      }, 8000)
    },
  },
  mounted() {
    this.newPage()
  },

  beforeDestroy() {
    clearInterval(this.interval)
  },
  transition: {
    name: 'slide',
    mode: 'out-in',
  },
}
</script>

<style scoped>
h1 {
  margin: 10% 10% 10% 40%;
  font-size: 70pt;
  min-width: 600px;
  text-align: right;
  color: #3a3a3a;
}
.header {
  width: 100%;
  margin-right: 10%;
}
.intro {
  z-index: 1;
}

.about {
  position: absolute;
  top: 120vh;
}
.header-svg {
  position: absolute;
  z-index: -1;
  margin-left: -10%;
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
</style>
