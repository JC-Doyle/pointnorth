<template>
  <div class="injected-reader about">
    <div class="team">
      <div class="member">
        <div class="profile">
          <h2>Anthony Doyle</h2>
          <p>
            As the developer, Anthony Doyle, has assembled a team of
            professional property specialists to ensure that all your build and
            construction needs are met. This all starts with securing prime
            development land in selected, and sought after, suburbs in the north
            of Johannesburg - to date these areas include Melrose, Craighall and
            Hurlingham.
          </p>
        </div>
        <div class="image"></div>
      </div>
      <div class="member swap">
        <div class="profile">
          <h2>Chris Sparks</h2>
          <p>
            House design and architecture is led by Christopher Sparks
            B.Sc(Arch) B.Arch(Hons) M.Arch(Prof) Pr(Arch). Chris’s innovative
            design style is matched by his ability to customise the home layout
            to meet your specific lifestyle needs. Chris has deep architectural
            experience and insight, having completed over 40 residential
            projects in Gauteng.
          </p>
        </div>
        <div class="image"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style scoped>
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
  flex-direction: column;
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