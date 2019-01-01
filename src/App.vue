<template>
  <div id="app">
      <Scrollama @step-enter="stepEnterHandler" @step-exit="stepExitHandler" >
        <Landing ref="LandingComponent" />
        <Profile>
          <Me ref="MeComponent" />
        </Profile>
        <Profile>
          <Education />
        </Profile>
        <Profile>
          <Work />
        </Profile>
        <Profile>
          <Projects />
        </Profile>
        <Profile>
          <Activities />
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
    Activities
  },
  methods: {
    stepEnterHandler ({element, index, direction}) {
      // console.log('enter', index, direction)
      if (direction === 'down') {
        switch (index) {
          case 1:
            this.$refs.MeComponent.$emit('onEnter')
            break;
        }
      }
    },
    stepExitHandler ({element, index, direction}) {
      // console.log('exit', index, direction)
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

.stage {
  opacity: 0;
}
</style>
