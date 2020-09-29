<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="reader">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'desktop',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;1,200;1,300&display=swap');
html {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  margin: 30px;
  display: flex;
  justify-content: space-between;
}

.reader {
  margin-left: 300px;
  flex-grow: 1;
}

.sidebar {
  min-width: 300px;
  position: fixed;
}

a {
  text-decoration: none;
  color: #4b5e68;
}
</style>
