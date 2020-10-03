<template>
  <div class="injected-reader about">
    <div class="about-header">
      <h1>Developing beautiful homes.</h1>
    </div>
    <div class="intro">
      <h2>About Us</h2>
      <p>
        Established in 2013, Point North Properties is a dynamic and innovative
        residential property development company based in Johannesburg, South
        Africa. We focus on select new-build developments in some of the city’s
        premier residential suburbs on behalf of clients seeking a turn-key and
        end-to end home ownership solution. We deliver bespoke projects for
        clients seeking safe and high-quality living – the projects typically
        range from two to eight free-hold residential homes per development. We
        focus on select new-build developments in some of the city’s premier
        residential suburbs on behalf of clients seeking a turn-key and end-to
        end home ownership solution. We deliver bespoke projects for clients
        seeking safe and high-quality living – the projects typically range from
        two to eight free-hold residential homes per development.
      </p>
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
  margin: 10% 10% 10% 40%;
  font-size: 70pt;
  min-width: 600px;
  text-align: right;
  color: #3a3a3a;
}
.about-header {
  width: 100%;
  margin-right: 10%;
}
.intro {
  background-color: #f2f4f5;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  z-index: 1;
}

.about {
  height: 100vh;
}
.header-svg {
  position: absolute;
  z-index: -1;
  margin-left: -10%;
}
</style>
