<template>
  <div id="stage">
    <div id="text">
      <h1 id="title"><span>L</span><span>O</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>K</span><span>K</span><span>I</span><span>D</span></h1>
      <h4 id="subtitle">An optimistic 21 years old Thai youth, in love with integrating code and design.</h4>
    </div>

    <div id="balloonicon">
      <object id="unicorn" data="/static/svg/balloonicorn2.min.svg" type="image/svg+xml"></object>
    </div>

    <div id="caret">
      <img @click="go()" src="/static/svg/caret_down.min.svg"/>
    </div>

    <div class="cloud" id="cloud-far"></div>
    <div class="cloud" id="cloud-close"></div>

  </div>
</template>

<script>
import anime from 'animejs'

let timeline
let unicon

function genPartical() {
  let uc = document.getElementById('balloonicon')
  let colors = ['#ab47bc','#5c6bc0','#29b6f6','#66bb6a','#ffee58','#ffa726','#ef5350']
  
  for (let i = 0; i < 49; i++) {
    let p = document.createElement('div')
    p.style['background-color'] = colors[i%7]
    p.style['width'] = '1vw'
    p.style['height'] = '1vw'
    p.style['position'] = 'absolute'
    p.style['bottom'] = '-14vw'
    p.style['right'] = '-8vw'
    p.style['border-radius'] = '50%'
    p.style['z-index'] = 0
    uc.appendChild(p);
    animatePartical(p,i)
  }
}

function animatePartical(p,i) {
  anime({
    targets: p,
    delay: () => i*8,
    translateX: () => anime.random(6,12)+'vw',
    translateY: () => anime.random(8,15)+'vw',
    duration: (t) => 1200,
    scale: anime.random(1.5,2),
    opacity: 0,
    loop: true,
    easing: 'linear',
  });
}

function genCloud(parent,bg,offset) {
  let cl = document.getElementById(parent)
  
  for (let i = 0; i < 9; i++) {
    let c = document.createElement('div')
    let rand = anime.random(16,20)

    c.style['background-color'] = bg
    c.style['width'] = rand+'vw'
    c.style['height'] = rand+'vw'
    c.style['position'] = 'absolute'
    c.style['bottom'] = -rand/2+'vw'
    c.style['left'] = i*100/8 - rand/2 + anime.random(-1,1) + offset + 'vw'
    c.style['border-radius'] = '50%'
    c.style['z-index'] = 20
    cl.appendChild(c)
    animateCloud(c)
  }
}

function animateCloud(c) {
  anime({
    targets: c,
    direction: 'alternate',
    delay: () => anime.random(0,1000),
    translateY: () => anime.random(1,2)+'vw',
    duration: 2000,
    loop: true,
    easing: 'easeInOutQuad',
  })
}

export default {
  name: 'Landing',
  mounted() {
    // Init timeline
    timeline = anime.timeline({
      direction: 'normal',
      autoplay: true,
      begin: () => {
        genCloud('cloud-far','#CBC2DF',5)
        genCloud('cloud-close','white',0)
        genPartical()
      }
    });

    // Init unicorn
    unicon = anime({
      targets: '#unicorn',
      direction: 'alternate',
      translateY: '2vh',
      autoplay: false,
      duration: 1500,
      loop: true,
      easing: 'easeInOutQuad',
      
    });

    // Play timeline
    timeline
      .add({
        // Cloud in
        targets: '.cloud',
        opacity: [0,1],
        translateY: ['10vh',0],
        duration: 2000,
        easing: 'easeInOutQuad',
        delay: (el,i) => i*500,
      })
      .add({
        // Unicon in
        targets: '#balloonicon',
        translateY: ['90vh',0],
        translateX: ['40vw',0],
        duration: 3000,
        elasticity: 200,
        easing: 'easeInOutElastic',
        offset: 1000,
        complete: () => unicon.play()
      })
      .add({
        // Title in
        targets: 'span',
        opacity: [0,1],
        duration: 8000,
        delay: () => anime.random(0,1000),
        offset: 4000
      })
      .add({
        // Subtitle in
        targets: '#subtitle',
        opacity: [0,1],
        duration: 3000,
        offset: 5000
      })
      .add({
        // Caret in
        targets: '#caret',
        opacity: [0,1],
        duration: 1000,
        offset: 6000,
        complete: () => timeline.pause()
      })
      .add({
        // Text out
        targets: ['#caret','#subtitle','#title'],
        opacity: 0,
        duration: 3000,
        offset: 7500,
      })
      .add({
        // Unicon out
        targets: '#balloonicon',
        translateY: '-90vh',
        translateX: '-40vw',
        duration: 3000,
        elasticity: 200,
        easing: 'easeInOutElastic',
        offset: 8000,
        begin: () => unicon.pause()
      })
      .add({
        // Far Cloud out
        targets: '#cloud-far',
        opacity: 0,
        translateY: '5vh',
        duration: 3000,
        offset: 9000
      })
      .add({
        // Stage out
        targets: '#stage',
        translateY: '-100vh',
        duration: 600,
        easing: 'easeInQuad',
        offset: 9000,
        complete: () => console.log('complete')
      })
  },
  methods: {
    go() {
      timeline.play()
    }
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
  overflow: hidden;
}

#text {
  position: absolute;
  top: 22vh;
  margin: 0 auto;
  text-align: center;
  z-index: 12;
  

  #title {
    font-size: 13vw;
    font-weight: 100;
    margin: 0;
  }

  #subtitle {
    font-size: 1.9vw;
    font-weight: 200;
    margin: 3vw 0;
  }
}

#balloonicon {
  position: absolute;
  top: 21vh;
  left: 38vw;
  z-index: 10;

  #unicorn {
    position: absolute;
    width: 12vw;
    z-index: 10;
  }
}

#caret {
  position: absolute;
  bottom: 20vw;

  img {
    width: 40px;
    height: auto;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
}

.cloud {
  width: 100%;
  position: absolute;
  

  &#cloud-far {
    bottom: 2vw;
    z-index: 5;
  }

  &#cloud-close {
    bottom: 0;
    z-index: 15;
  }
}
</style>
