<template>
  <nuxt-link to="/contact">
    <div class="contact-bar">
      <h2>Details</h2>
      <h3>082-470-1052</h3>
      <h3>ant.doyle@telkomsa.net</h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style scoped>
h2 {
  font-size: 22pt;
  font-weight: 300;
  color: #929292;
  margin: 5px;
}
h3 {
  font-size: 14pt;
  font-weight: 300;
  color: #3e4e56;
  margin: 5px;
}
.contact-bar {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 15px 5px rgba(77, 77, 77, 0.15);
  padding: 20px;
  background-color: #f2f4f5;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  z-index: 2;
}
.contact-bar:hover {
  box-shadow: 0px 0px 15px 5px rgba(77, 77, 77, 0.25);
}
</style>