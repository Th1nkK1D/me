<template>
  <div>
    <h1 class="title">ME</h1>
    <!-- bio -->
    <div class="columns is-gapless bio">
      <div class="column is-narrow">
        <div class="padder">
          <img src="/static/img/lkavatar.jpg" alt="" class="avatar">
        </div>
      </div>
      <div class="column">
        <div class="padder">
          <h1 class="name">Withee Poositasai</h1>

          <div class="columns is-gapless is-multiline">
            <div v-for="field in bio" :key="field.icon" :class="'column is-'+field.size">
              <div class="padder"><i :class="'icon-'+field.icon"></i> {{field.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- end of bio -->
    
    <h2>Skills</h2>
    <!-- skills -->
    <div class="columns is-gapless">
      <div v-for="cat in skills" :key="cat.name" :class="'column is-' + cat.size">
        <div class="padder">
          <h3>{{cat.name}}</h3>
          <div class="columns is-gapless is-multiline">
            <div v-for="skill in cat.skill" :key="skill.label" :class="'column is-' + 12/cat.column">
              <div class="padder"><skillbar :label="skill.label" :value="skill.value"></skillbar></div> 
            </div>
          </div>
        </div>
      </div>
    </div><!-- end of skills -->
  </div>
</template>


<script>
import Skillbar from './Skillbar'

export default {
  name: 'Me',
  components: {
    Skillbar
  },
  data() {
    return {
      bio: [
        {icon: 'direction', text: '17 Soi Panichayakarnthonburi 21, Jarunsamitwong 13 Rd, Bangkokyai, Bangkok, Thailand 10600', size: 11},
        {icon: 'present', text: '13 Nov 1996', size: 4},
        {icon: 'phone', text: '(+66) 85 125 5278', size: 4},
        {icon: 'envelope-open', text: 'witheep@gmail.com', size: 4},
        {icon: 'social-github', text: 'Th1nkK1D', size: 4},
        {icon: 'social-facebook', text: 'Lookkid Withee Poositasai', size: 4},
        {icon: 'social-youtube', text: 'Witheep', size: 4},
      ],
      skills: [
        {
          name: 'Developer',
          size: 6,
          column: 2,
          skill: [
            {label: 'HTML', value: '11'},
            {label: 'CSS + SASS', value: '10'},
            {label: 'Javascript', value: '8'},
            {label: 'VueJS', value: '6'},
            {label: 'Angular', value: '5'},
            {label: 'PHP', value: '5'},
            {label: 'Ruby', value: '6'},
            {label: 'Python', value: '4'},
            {label: 'R', value: '4'},
            {label: 'C', value: '7'},
          ]
        },
        {
          name: 'Designer',
          size: null,
          column: 1,
          skill: [
            {label: 'Sketch', value: '5'},
            {label: 'XD', value: '7'},
            {label: 'Illustrator', value: '6'},
            {label: 'Photoshop', value: '5'},
            {label: 'After Effect', value: '3'},
          ]
        },
        {
          name: 'Communication',
          size: null,
          column: 1,
          skill: [
            {label: 'Thai', value: '12'},
            {label: 'English', value: '9'},
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
      font-weight: bold;
      margin: 0 0 0.5em 0;
    }
  }
</style>
