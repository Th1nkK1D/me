<template>
  <div>
    <timeline title="Projects" :data="projects" ref="Timeline"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import db from '../db'

export default {
  name: 'Project',
  components: {
    Timeline
  },
  data() {
    return {
      projects: []
    }
  },
  firebase: {
    projects: db.ref('projects')
  }
}
</script>

<style lang="scss" scoped>

</style>
