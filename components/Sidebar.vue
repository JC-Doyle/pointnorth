<template>
  <div class="side-bar">
    <div @click="expandSidebar" class="sidebar-top">
      <img src="~/assets/logo.svg" class="logo" />
      <div class="logo-box"></div>
    </div>
    <div class="sidebar-nav">
      <Nav v-if="sidebarExpanded" />
    </div>
    <div class="sidebar-bottom">
      <img src="~/assets/contact.svg" class="contact" />
      <div class="contact-box"></div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Selectors from './Selectors.vue'

export default {
  name: 'Sidebar',
  components: {
    Nav,
    Selectors,
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
  width: 20%;
  padding: 20px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
}

.sidebar-top {
  flex: 1;
  align-self: center;
}

.sidebar-nav {
  flex: 3;
}

.sidebar-bottom {
  flex: 1;
  align-self: center;
  position: relative;
  width: 100%;
}

.logo {
  z-index: 2;
  width: 110%;
  position: relative;
  right: 5%;
  cursor: pointer;
}

.contact {
  z-index: 2;
  width: 70%;
  left: 15%;
  padding: 10px;
  position: relative;
  float: center;
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
  animation: ease-enter 1s;
}

.ease-enter-active {
  animation: ease-enter 1s;
}

@keyframes ease-enter {
  0% {
    opacity: 0;
    font-size: 0em;
  }
  25% {
    font-size: 2em;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
}

@keyframes ease-leave {
  0% {
    transform: scale(1);
    max-height: 10em;
  }
  100% {
    transform: scale(0);
    max-height: 0;
  }
}
</style>