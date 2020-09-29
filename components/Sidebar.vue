<template>
  <div class="side-bar">
    <div @click="expandSidebar" class="logo">
      <h2>Point North</h2>
      <Selectors>
        <h3>Properties</h3>
      </Selectors>
    </div>
    <Nav v-if="sidebarExpanded" />
    <Arrow v-else />
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Selectors from './Selectors.vue'
import Arrow from './Arrow.vue'

export default {
  name: 'Sidebar',
  components: {
    Nav,
    Selectors,
    Arrow,
  },
  methods: {
    expandSidebar: function () {
      this.$store.commit('toggleSidebar')
    },
  },
  computed: {
    sidebarExpanded() {
      return this.$store.state.sidebarExpanded
    },
    pages() {
      return this.$store.state.pages
    },
  },
}
</script>
<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1%;
  box-shadow: 0px 0px 15px 5px rgba(77, 77, 77, 0.05);
}
.side-bar:hover {
  box-shadow: 0px 0px 15px 5px rgba(77, 77, 77, 0.15);
}

.logo {
  cursor: pointer;
}

.nav-bar {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0;
  align-items: center;
}

::selection {
  color: none;
  background: none;
}

/* For Mozilla Firefox */

::-moz-selection {
  color: none;
  background: none;
}
.ease-enter-active {
  transition: opacity 2s, font-size 0.1s ease;
}

.ease-enter {
  opacity: 0;
  font-size: 0em;
}

h5 {
  font-size: 24px;
  color: #4b5e68;
}

h3 {
  font-size: 36px;
  font-weight: 100;
  color: #3e4e56;
}

.selectors {
  margin-top: -10px;
}

h2 {
  font-size: 50px;
  font-weight: 300;
  color: #1f262a;
}

.logo {
  margin: 5px;
}

.nav {
  margin: 20px;
}
</style>