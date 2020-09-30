<template>
  <div class="side-bar">
    <div @click="expandSidebar" class="logo">
      <img src="~/assets/logo.png" alt="logo" />
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
  box-shadow: 0px 0px 15px 5px rgba(77, 77, 77, 0.15);
  background-color: #f2f4f5;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  z-index: 2;
}
.side-bar:hover {
  box-shadow: 0px 0px 15px 5px rgba(77, 77, 77, 0.25);
}

.logo {
  cursor: pointer;
  border-radius: 7px;
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

.selectors {
  margin-top: -10px;
}

h2 {
  font-size: 36pt;
  font-weight: 200;
}

.logo {
  margin: 20px;
  margin-bottom: 0px;
}

.nav {
  margin: 20px;
}

.arrow {
  margin: 20px;
}
</style>