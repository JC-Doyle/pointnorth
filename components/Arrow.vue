<template>
  <div @click="toggleSidebar" class="arrow">
    <transition appear name="arrow">
      <svg
        width="35"
        height="11"
        viewBox="0 0 35 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          y1="-0.5"
          x2="19.67"
          y2="-0.5"
          transform="matrix(0.889184 0.45755 -0.889184 0.45755 0 1)"
          stroke="#7F7F7F"
        />
        <line
          y1="-0.5"
          x2="19.692"
          y2="-0.5"
          transform="matrix(0.889184 -0.45755 0.889184 0.45755 17.4902 10.0101)"
          stroke="#7F7F7F"
        />
      </svg>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Arrow",
  methods: {
    toggleSidebar: function () {
      this.$store.commit("toggleSidebar");
    },
  },
};
</script>

<style>
.arrow {
  margin-top: 15px;
  cursor: pointer;
}

.arrow-enter {
  margin-top: 250px;
}

.arrow-enter-active {
  transition: margin-top 0.3s ease;
}
</style>