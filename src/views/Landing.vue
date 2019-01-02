<template>
  <div id="stage">
    <div id="text">
      <h1 id="title"><span>L</span><span>O</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>K</span><span>K</span><span>I</span><span>D</span></h1>
      <div class="is-hidden-mobile">
        <h4 class="subtitle">An optimistic 21 years old Thai youth, in love with integrating code and design.</h4>
        <h4 class="tag">#Web &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Technologies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Changemaker &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #SocialStartup</h4>
      </div>
      
      <div class="is-hidden-tablet">
        <h4 class="subtitle" style="font-size:3.9vw">An optimistic 21 years old Thai youth,</h4>
        <h4 class="subtitle" style="font-size:3.7vw">in love with integrating code and design.</h4>
        <h4 class="tag" style="font-size:3.95vw">#Web &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Technologies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #Design</h4>
        <h4 class="tag" style="font-size:3.9vw">#Changemaker &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #SocialStartup</h4>
      </div>
    </div>

    <div id="balloonicon">
      <object id="unicorn" data="/static/svg/balloonicorn2.min.svg" type="image/svg+xml"></object>
    </div>

    <div id="caret">
      <a href="#me" v-smooth-scroll="{ duration: 1000 }">
        <i class="icon-arrow-down"></i>
      </a>
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
  
  for (let i = 0; i < 35; i++) {
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
    delay: () => i*10,
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

  let cloudSize = 20
  let amount = 100*2/cloudSize //Math.ceil(window.screen.availWidth*2/cloudSize)
  
  for (let i = 0; i < amount; i++) {
    let c = document.createElement('div')
    let rand = anime.random(cloudSize*90/100,cloudSize*110/100)

    c.style['background-color'] = bg
    c.style['width'] = rand+'vw'
    c.style['height'] = rand+'vw'
    c.style['position'] = 'absolute'
    c.style['bottom'] = -rand/2+'vw'
    c.style['left'] = i*cloudSize*2/3 - rand/2 + anime.random(-cloudSize/20,cloudSize/20) + offset*cloudSize + 'vw'
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
    translateY: () => anime.random(1,2)+'vh',
    duration: 2000,
    loop: true,
    easing: 'easeInOutQuad',
  })
}

export default {
  name: 'Landing',
  mounted() {
    // Init unicorn
    unicon = anime({
      targets: '#unicorn',
      direction: 'alternate',
      translateY: '1vw',
      autoplay: false,
      duration: 1500,
      loop: true,
      easing: 'easeInOutQuad',
      
    })

    // Init timeline
    timeline = anime.timeline({
      direction: 'normal',
      autoplay: false,
      begin: () => {
        genCloud('cloud-far','#CBC2DF',-0.5)
        genCloud('cloud-close','white',0)
        genPartical()
      }
    })
    .add({
      // Cloud in
      targets: '#stage',
      opacity: [0,1],
      duration: 500,
      easing: 'easeInOutQuad',
      })
    .add({
      // Cloud in
      targets: '.cloud',
      opacity: [0,1],
      translateY: ['10vh',0],
      duration: 2000,
      easing: 'easeInOutQuad',
      offset: 500,
      delay: (el,i) => i*500,
    })
    .add({
      // Unicon in
      targets: '#balloonicon',
      translateY: ['100vh',0],
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
      targets: '.subtitle',
      opacity: [0,1],
      duration: 3000,
      offset: 5000
    })
    .add({
      // Tag in
      targets: '.tag',
      opacity: [0,1],
      duration: 3000,
      offset: 5500
    })
    .add({
      // Caret in
      targets: '#caret',
      opacity: [0,1],
      duration: 1000,
      offset: 6000,
    })
    // .add({
    //   // Text out
    //   targets: ['#caret','.subtitle','#title','.tag'],
    //   opacity: 0,
    //   duration: 3000,
    //   offset: 7500,
    // })
    // .add({
    //   // Unicon out
    //   targets: '#balloonicon',
    //   translateY: '-90vh',
    //   translateX: '-40vw',
    //   duration: 3000,
    //   elasticity: 200,
    //   easing: 'easeInOutElastic',
    //   offset: 8000,
    //   begin: () => unicon.pause()
    // })
    // .add({
    //   // Far Cloud out
    //   targets: '#cloud-far',
    //   opacity: 0,
    //   translateY: '5vh',
    //   duration: 3000,
    //   offset: 9000
    // })
    // .add({
    //   // Stage out
    //   targets: '#stage',
    //   translateY: '-100vh',
    //   duration: 600,
    //   easing: 'easeInQuad',
    //   offset: 9000
    // })    

    // Attach event listener
    this.$once('onEnter', () => {
      timeline.play()
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
  overflow: hidden;
  margin-bottom: 20px;
}

#text {
  position: absolute;
  top: calc((50vh - 100px)/2);
  margin: 0 auto;
  text-align: center;
  z-index: 12;
  

  #title {
    font-size: 13.4vw;
    font-weight: 100;
    margin: 0;
  }

  .subtitle {
    font-size: 1.9vw;
    font-weight: 300;
    margin: 1vw 0;

    &.mobile {
      font-size: 2.8vw;
    }
  }

  .tag {
    font-size: 2.02vw;
    font-weight: 300;
    color: #A08DCA;
  }
}

#balloonicon {
  position: absolute;
  top: calc((50vh - 100px)/2 + 1vw);
  left: 38vw;
  z-index: 10;

  #unicorn {
    position: absolute;
    width: 12vw;
    z-index: 10;
    max-width: none;
  }
}

#caret {
  position: absolute;
  bottom: 30px;
  z-index: 19;

  @media (max-width: 768px) {
    bottom: 30vw;
  }

  a {
    font-size: 24px;
    color: #5F537B;
    opacity: 1;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      color: white;
      font-size: 16px;
    }
  }
}

.cloud {
  width: 100%;
  position: absolute;
  

  &#cloud-far {
    bottom: 40px;
    z-index: 5;
  }

  &#cloud-close {
    bottom: 20px;
    z-index: 15;
  }
}
</style>
