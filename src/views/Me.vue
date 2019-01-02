<template>
  <div>
    <h1 class="title layer layer-me">ME</h1>
    <!-- bio -->
    <div class="columns is-gapless layer layer-me bio">
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

    <h2 class="layer layer-me title">Hobbies</h2>
    <div class="padder layer layer-me">
      {{ hobbies }}
    </div>

    <br>
    
    <h2 class="layer layer-me title">Skills</h2>
    <!-- skills -->
    <div class="columns is-gapless is-desktop layer layer-me">
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
import Skillbar from '@/components/Skillbar'
import { bio, hobbies, skills } from '@/assets/data/me.json'

export default {
  name: 'Me',
  components: {
    Skillbar
  },
  mounted() {
    this.$once('onEnter', () => {
      anime.timeline({
        loop: false,
        easing: 'easeOutQuad',
      })
      .add({
        targets: '.layer-me',
        direction: 'normal',
        translateY: ['10vw',0],
        opacity: [0,1],
        duration: 1500,
        delay: (el,i) => i*100,
        complete: () => this.$emit('activateSkill')
      })
    })
  },
  data() {
    return {
      bio,
      hobbies,
      skills
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
