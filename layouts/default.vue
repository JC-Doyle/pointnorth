<template>
  <div class="container" @scroll="onScroll">
    <Sidebar />
    <div class="site">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'desktop',
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero

      if (currentScrollPosition < 0) {
        return
      } // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400&display=swap');
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
  display: flex;
}

.site {
  position: absolute;
  overflow: hidden;
  padding-left: 18vw;
  right: 0;
}

a {
  text-decoration: none;
}
h1 {
  font-family: 'Poiret One', sans-serif;
  font-weight: 800;
  color: #3a3a3a;
  -webkit-text-stroke: 1px rgb(228, 221, 215);
  z-index: 3;
}
h2 {
  font-family: 'Poiret One', sans-serif;
  font-weight: 900;
  color: #3a3a3a;
  text-align: center;
}

h3 {
  font-family: 'Playfair Display', sans-serif;
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
  flex-direction: column;
}

@media only screen and (max-width: 800) {
}
</style>
