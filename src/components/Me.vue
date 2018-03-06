<template>
  <div>
    <h1 class="title layer">ME</h1>
    <!-- bio -->
    <div class="columns is-gapless layer bio">
      <div class="column is-narrow">
        <div class="padder">
          <img src="/static/img/lkavatar.jpg" alt="" class="avatar">
        </div>
      </div>
      <div class="column">
        <div class="padder">
          <h3 class="name">Withee Poositasai</h3>

          <div class="columns is-gapless is-multiline is-desktop">
            <div v-for="field in bio" :key="field.icon" :class="'column is-'+field.size+'-desktop'">
              <div class="columns is-gapless is-mobile padder">
                <div class="column is-narrow">
                  <i v-if="field.icon" :class="'icon-'+field.icon"></i>
                  <img v-else :src="field.custom_icon" class="custom-icon">
                </div>
                <div class="column">
                  <a v-if="field.link" :href="field.link" target="_blank">{{field.text}}</a>
                  <span v-else> {{field.text}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- end of bio -->

    <h2 class="layer title">Hobbies</h2>
    <div class="padder layer">
      Coding - Reading - Drawing - Cycling - Playing Piano - Going for an adventure once in a while
    </div>

    <br>
    
    <h2 class="layer title">Skills</h2>
    <div class="padder layer">
      My comfortable level and years of experience
    </div>
    <!-- skills -->
    <div class="columns is-gapless is-desktop layer">
      <div v-for="cat in skills" :key="cat.name" :class="'column is-' + cat.size + '-desktop'">
        <div class="padder">
          <h3>{{cat.name}}</h3>
          <div class="columns is-gapless is-multiline is-desktop">
            <div v-for="skill in cat.skill" :key="skill.label" :class="'column is-' + 12/cat.column + '-desktop'">
              <div class="padder"><skillbar :label="skill.label" :value="skill.value" :desc="skill.desc"></skillbar></div> 
            </div>
          </div>
        </div>
      </div>
    </div><!-- end of skills -->
  </div>
</template>


<script>
import anime from 'animejs'
import Skillbar from './Skillbar'

export default {
  name: 'Me',
  components: {
    Skillbar
  },
  mounted() {
    anime({
      targets: '.layer',
      direction: 'normal',
      translateY: ['10vw',0],
      opacity: [0,1],
      duration: 1500,
      delay: (el,i) => i*100,
      loop: false,
      easing: 'easeOutQuad',
    })
  },
  data() {
    return {
      bio: [
        {icon: 'direction', text: '17 Soi Panichayakarnthonburi 21, Jarunsanitwong 13 Rd, Bangkokyai, Bangkok, Thailand 10600', size: 11},
        {icon: 'present', text: '13 Nov 1996', size: 4},
        {icon: 'phone', text: '+66 85 125 5278', size: 4},
        {icon: 'envelope-open', text: 'witheep@gmail.com', link: 'mailto:witheep@gmail.com', size: 4},
        {icon: 'social-facebook', text: 'Lookkid Withee Poositasai', link: 'https://www.facebook.com/Th1nkK1D', size: 4},
        {icon: 'social-github', text: 'Th1nkK1D', link: 'https://github.com/Th1nkK1D', size: 4},
        {custom_icon: '/static/svg/codepen.min.svg', text: '@Th1nkK1D', link: 'https://codepen.io/Th1nkK1D', size: 4},
      ],
      skills: [
        {
          name: 'Developer',
          size: 6,
          column: 2,
          skill: [
            {label: 'HTML', value: '90', desc: '4 years'},
            {label: 'CSS + SASS', value: '75', desc: '4 years'},
            {label: 'Javascript', value: '65', desc: '3 years'},
            {label: 'VueJS', value: '60', desc: '< 1 year'},
            {label: 'Angular', value: '60', desc: '< 1 year'},
            {label: 'Go', value: '50', desc: '< 1 year'},
            {label: 'Ruby', value: '50', desc: '< 1 year'},
            {label: 'PHP', value: '40', desc: '3 years'},
            {label: 'Python', value: '40', desc: '< 1 year'},
            {label: 'R', value: '40', desc: '< 1 year'},
            {label: 'C', value: '40', desc: '5 years'},
          ]
        },
        {
          name: 'Designer',
          size: null,
          column: 1,
          skill: [
            {label: 'Sketch', value: '65', desc: '1 year'},
            {label: 'XD', value: '60', desc: '< 1 year'},
            {label: 'Illustrator', value: '50', desc: '6 years'},
            {label: 'Photoshop', value: '45', desc: '6 years'},
            {label: 'After Effect', value: '30', desc: '< 1 year'},
          ]
        },
        {
          name: 'Languages',
          size: null,
          column: 1,
          skill: [
            {label: 'Thai', value: '95', desc: 'Native'},
            {label: 'English', value: '80', desc: 'TOEIC 830'},
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .bio {
    .avatar {
      border-radius: 50%;
      width: 10em;
      height: auto;
    }

    .name {
      font-size: 40px;
      font-weight: bold;
      margin: 0 0 0.5em 0;
    }

    a {
      color: #4a4a4a;
      text-decoration: none;

      &:hover {
        color: black;
      }
    }

    i {
      color: #968cad;
      margin-right: 5px;
    }

    .custom-icon {
      height: 16px;
      width: auto;
      margin-right: 5px;
    }
  }
</style>
