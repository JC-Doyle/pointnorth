<template>
  <div
    class="select"
    :class="{
      hover: isHovered,
      current: isCurrent,
    }"
    @mouseenter="hover"
    @mouseleave="isHovered = false"
  >
    <h5
      :class="{ expanded: projectsExpanded && this.page === 'Projects' }"
      @click="click"
    >
      {{ page }}
    </h5>
    <NavProject v-if="page === 'Projects'" />
  </div>
</template>

<script>
export default {
  props: {
    page: String,
    route: String,
  },
  methods: {
    hover() {
      if (this.route != this.name) {
        this.isHovered = true
      }
    },
    click() {
      if (this.page === 'Projects') {
        this.$store.commit('toggleProject')
      }
    },
  },
  data() {
    return {
      isHovered: false,
    }
  },
  computed: {
    name() {
      return this.$route.name
    },
    isCurrent() {
      if (this.name.includes(this.route)) {
        return true
      } else {
        return false
      }
    },
    projectsExpanded() {
      return this.$store.state.projectsExpanded
    },
  },
}
</script>

<style scoped>
.select {
  color: rgb(228, 221, 215);
  position: relative;
  width: 90%;
  left: 5%;
  border-radius: 4px;
}
h5 {
  cursor: pointer;
  font-size: 1.4vw;
  padding: 0.4vw 0.6vw;
  margin: 0.4vw;
  font-weight: 400;
  color: inherit;
}

.hover {
  animation: hover ease-out 0.6s forwards;
}

a {
  text-decoration: none;
}

.current {
  animation: select ease 0.4s forwards;
}

.expanded {
  font-style: italic;
}

@keyframes hover {
  0% {
    background-color: none;
  }
  100% {
    font-weight: 500;
    color: #f3f3f3;
    background-color: rgba(228, 221, 215, 0.3);
  }
}
@keyframes select {
  0% {
    background-color: rgba(228, 221, 215, 0.3);
  }
  100% {
    font-weight: 500;
    color: #747474;
    background-color: rgb(228, 221, 215);
  }
}
</style>