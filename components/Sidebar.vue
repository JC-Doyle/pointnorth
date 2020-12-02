<template>
  <div class="side-bar">
    <div class="sidebar-top">
      <img @click="expandSidebar" src="~/assets/logo.svg" class="logo" />
      <div class="sidebar-nav">
        <Nav v-if="sidebarExpanded" />
      </div>
    </div>
    <div class="sidebar-bottom">
      <h4>Contact</h4>
      <div class="dot"></div>
      <a href="mailto:anthony@pointnorth.co.za">anthony@pointnorth.co.za</a>
      <a href="tel:+27823721600">+27-82-372-1600</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
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
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  z-index: 20;
}

.sidebar-top {
  background-color: #a6a6a6;
  margin: 2vw;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 1px rgba(63, 63, 63, 0.7);
}

.sidebar-top:hover,
.sidebar-bottom:hover {
  box-shadow: 0px 0px 5px 1px rgba(63, 63, 63, 0.9);
}

.sidebar-bottom {
  background-color: #a6a6a6;
  display: flex;
  margin: 2vw;
  padding: 1vw;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 1px rgba(63, 63, 63, 0.7);
}

.logo {
  z-index: 2;
  cursor: pointer;
  width: 14vw;
  position: relative;
}

.nav-bar {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0;
  align-items: center;
}

h4 {
  color: rgb(228, 221, 215);
  font-size: 1.4vw;
  text-align: center;
  font-weight: 500;
}

.dot {
  height: 4px;
  width: 4px;
  background-color: red;
  margin: 2px;
}

a {
  text-decoration: none;
  color: rgb(226, 226, 226);
  margin: 2px;
  font-size: 0.9vw;
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