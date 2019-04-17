<template>
  <div>
    <timeline title="Projects" :data="projects" ref="Timeline"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import { projects } from '@/assets/data/projects.json'

export default {
  name: 'Project',
  components: {
    Timeline
  },
  data() {
    return {
      projects
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
