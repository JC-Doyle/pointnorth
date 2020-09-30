<template>
  <div @click="toggleSidebar" class="arrow">
    <transition appear name="arrow">
      <svg
        width="53"
        height="17"
        viewBox="0 0 53 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.6344 16.7976C25.8988 16.9486 26.2234 16.9486 26.4878 16.7976L51.5942 2.46971C52.1732 2.1393 52.1732 1.30458 51.5942 0.974172V0.974172C51.3298 0.823238 51.0052 0.823238 50.7407 0.974172L27.0675 14.4842C26.4531 14.8348 25.6992 14.8348 25.0849 14.4842L1.41165 0.97419C1.14717 0.823256 0.822636 0.823256 0.558159 0.97419V0.97419C-0.0208105 1.3046 -0.0208112 2.13932 0.558158 2.46973L24.3316 16.037C24.3349 16.0389 24.3349 16.0437 24.3316 16.0456V16.0456C24.3283 16.0475 24.3283 16.0523 24.3316 16.0542L25.6344 16.7976Z"
        />
      </svg>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Arrow',
  methods: {
    toggleSidebar: function () {
      this.$store.commit('toggleSidebar')
    },
  },
}
</script>

<style scoped>
.arrow {
  margin-top: 15px;
  cursor: pointer;
  align-self: center;
}

svg {
  align-self: center;
  fill: #a1b1bb;
}

.arrow-enter {
  margin-top: 250px;
}

.arrow-enter-active {
  transition: margin-top 0.3s ease;
}
</style>