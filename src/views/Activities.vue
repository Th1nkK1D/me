<template>
  <div>
    <timeline title="Activities" :data="activities" ref="Timeline"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import db from '../db'

export default {
  name: 'Activities',
  components: {
    Timeline
  },
  data() {
    return {
      activities: []
    }
  },
  firebase: {
    activities: db.ref("activities")
  }
}
</script>

<style lang="scss" scoped>

</style>
