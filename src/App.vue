<template>
  <div id="app">
    <navbar ref="NavbarComponent" :active="activeStage" />
    <Scrollama @step-enter="stepEnterHandler">
      <Landing ref="LandingComponent" />
      <Profile>
        <Me ref="MeComponent" />
      </Profile>
      <Profile>
        <Education ref="EducationComponent" />
      </Profile>
      <Profile>
        <Work ref="WorkComponent" />
      </Profile>
      <Profile>
        <Projects ref="ProjectsComponent" />
      </Profile>
      <Profile>
        <Activities ref="ActivitiesComponent" />
      </Profile>
    </Scrollama>
  </div>
</template>

<script>
import 'intersection-observer' // for cross-browser support
import Scrollama from 'vue-scrollama'

import Landing from '@/views/Landing'
import Me from '@/views/Me'
import Education from '@/views/Education'
import Work from '@/views/Work'
import Projects from '@/views/Projects'
import Activities from '@/views/Activities'

import Navbar from '@/components/navbar'
import Profile from '@/components/Profile'

export default {
  name: 'app',
  components: {
    Scrollama,
    Landing,
    Profile,
    Me,
    Education,
    Work,
    Projects,
    Activities,
    Navbar
  },
  data() {
    return {
      activeStage: 0,
    }
  },
  methods: {
    stepEnterHandler ({element, index, direction}) {
      // console.log('enter', index, direction)
      this.activeStage = index
      console.log(this.activeStage)

      if (direction === 'down') {
        switch (index) {
          case 0:
            this.$refs.LandingComponent.$emit('onEnter')
            break;
          case 1:
            this.$refs.NavbarComponent.$emit('onEnter')
            this.$refs.MeComponent.$emit('onEnter')
            break;
          case 2:
            this.$refs.EducationComponent.$refs.Timeline.$emit('onEnter')
            break;
          case 3:
            this.$refs.WorkComponent.$refs.Timeline.$emit('onEnter')
            break;
          case 4:
            this.$refs.ProjectsComponent.$refs.Timeline.$emit('onEnter')
            break;
          case 5:
            this.$refs.ActivitiesComponent.$refs.Timeline.$emit('onEnter')
            break;
        }
      } else {
        switch (index) {
          case 0:
            this.$refs.NavbarComponent.$emit('onLeave')
            break;
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma/sass/utilities/_all.sass';
@import '../node_modules/bulma/sass/grid/columns.sass';
@import '../node_modules/bulma/sass/base/_all.sass';

body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}

.layer {
  opacity: 0;
}
</style>
