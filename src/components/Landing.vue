<template>
  <div id="stage">
    <div id="text">
      <h1 id="title">LO &nbsp;&nbsp;&nbsp;&nbsp; KKID</h1>
      <h4 id="subtitle">An optimistic 21 years old Thai youth, in love with integrating code and design.</h4>
    </div>

    <div id="balloonicon">
      <object id="unicorn" data="/static/balloonicorn2.min.svg" type="image/svg+xml"></object>
    </div>

  </div>
</template>

<script>
import anime from 'animejs'
let timeline

function genPartical() {
  let uc = document.getElementById('balloonicon')
  let colors = ['#ab47bc','#5c6bc0','#29b6f6','#66bb6a','#ffee58','#ffa726','#ef5350']
  
  for (let i = 0; i < 70; i++) {
    let p = document.createElement('div')
    p.style['background-color'] = colors[i%7]
    p.style['width'] = '1vw'
    p.style['height'] = '1vw'
    p.style['position'] = 'absolute'
    p.style['bottom'] = '-16vw'
    p.style['right'] = '-9vw'
    p.style['border-radius'] = '50%'
    p.style['z-index'] = '0'
    uc.appendChild(p);
    animatePartical(p,i)
  }
}

function animatePartical(p,i) {
  anime({
    targets: p,
    delay: (t) => i*8,
    translateX: () => anime.random(6,12)+'vw',
    translateY: () => anime.random(8,15)+'vw',
    duration: (t) => 1200,
    scale: anime.random(1.5,2),
    opacity: 0,
    loop: true,
    easing: 'linear',
  });
}

export default {
  name: 'Landing',
  mounted() {
    timeline = anime.timeline({
      direction: 'reverse',
      autoplay: true,
      // loop: true,
      begin: () => genPartical()
    });

    timeline
      .add({
        targets: '#balloonicon',
        translateY: '90vh',
        translateX: '40vw',
        
        duration: 3000,
        elasticity: 200,
        easing: 'easeInOutElastic'
      })
  }
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
  z-index: 12;
  

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

#balloonicon {
  position: absolute;
  top: 25vh;
  left: 35.5vw;

  #unicorn {
    position: absolute;
    width: 14vw;
    z-index: 10;
  }
}
</style>
