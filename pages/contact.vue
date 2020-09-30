<template>
  <div class="injected-reader about">
    <div class="team-header">
      <img class="header-svg" src="~/assets/talbragar.svg" alt="" width="60%" />
      <h1>Contact Us</h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style scoped>
h1 {
  font-family: 'Playfair Display', sans-serif;
  min-width: 600px;
  text-align: right;
  color: #3a3a3a;
}
.team-header {
  width: 100%;
  margin-right: 10%;
}
.team {
  background-color: #f2f4f5;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  z-index: 1;
}

.member {
  display: flex;
  flex-direction: row;
  margin: 5%;
  justify-content: space-around;
  align-items: center;
}

.swap {
  flex-direction: row-reverse;
}
.profile {
  width: 40%;
  display: flex;
}

.image {
  width: 400px;
  height: 500px;
  background-color: #bdb4b4;
}
.about {
  height: 100vh;
}
.header-svg {
  position: absolute;
  z-index: -1;
  margin-left: -10%;
}

h2 {
  margin: none;
}
</style>