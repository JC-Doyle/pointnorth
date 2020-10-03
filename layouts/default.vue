<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="site">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'desktop',
}
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,300;0,600;1,300;1,500&display=swap');
html {
  font-family: 'Raleway', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-attachment: fixed;
  background-position: 10%;
  background-color: rgb(228, 221, 215);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  height: 100%;
}

.site {
}

a {
  text-decoration: none;
}
h1 {
  font-size: 11vw;
  font-family: 'Poiret One', sans-serif;
  font-weight: 800;
  color: #3a3a3a;
  -webkit-text-stroke: 1px rgb(228, 221, 215);
  text-align: right;
  margin: 5% 4% 0 0;
  z-index: 3;
  position: relative;
}
h2 {
  font-size: 50pt;
  margin: 20px;
  font-family: 'Poiret One', sans-serif;
  font-weight: 900;
  color: #3a3a3a;
  text-align: center;
}

h3 {
  font-size: 54pt;
  font-family: 'Playfair Display', sans-serif;
  font-style: italic;
  font-weight: 400;
  color: #3a3a3a;
  text-align: left;
}
p {
  margin: 0 5% 4% 5%;
  color: #312d2d;
  line-height: 200%;
  font-size: 18pt;
}

.injected-reader {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-left: 20%;
  margin-right: 3%;
}

.contact-bar {
}
</style>
