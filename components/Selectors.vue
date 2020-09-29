<template>
  <div class="selectors">
    <svg
      class="left"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="6.5" x2="13" y2="6.5" />
      <line x1="13.5" x2="13.5" y2="13" />
    </svg>
    <slot></slot>
    <svg
      class="right"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="-0.5" x2="13" y2="-0.5" transform="matrix(-1 0 0 1 14 7)" />
      <line y1="-0.5" x2="13" y2="-0.5" transform="matrix(0 1 1 0 1 0)" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Selectors',
  props: {
    selected: String,
  },
}
</script>
<style scoped>
.selectors {
  display: flex;
  justify-content: center;
  align-items: center;
}

svg {
  stroke: #afafaf;
}

.left {
  margin-right: 7px;
}

.right {
  margin-left: 7px;
}
</style>
</style>