<template>
  <div id="stage">
    <div id="text">
      <h1 id="title">LO O KKID</h1>
      <h4 id="subtitle">An optimistic 21 years old Thai youth, in love with integrating code and design.</h4>
    </div>

    <div id="ballonicon">
      <object id="unicorn" data="/static/balloonicorn2.min.svg" type="image/svg+xml"></object>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style lang="scss" scoped>
#stage {
  background-color: #5F537B;
  color: white;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
}

#text {
  position: absolute;
  top: 25vh;
  margin: 0 auto;
  text-align: center;
  

  #title {
    font-size: 15vw;
    font-weight: 100;
    margin: 0;
  }

  #subtitle {
    font-size: 2.17vw;
    font-weight: 200;
    margin: 5vw 0 0 0;
  }
}

#ballonicon {
  position: absolute;
  top: 25vh;
  left: 35.5vw;

  #unicorn {
    width: 14vw;
  }
}
</style>
