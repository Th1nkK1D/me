<template>
  <div>
    <timeline title="WORK EXPERIENCE" :data="work" ref="Timeline"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import db from '../db'

export default {
  name: 'Work',
  components: {
    Timeline
  },
  data() {
    return {
      work: []
    }
  },
  firebase: {
    work: db.ref('work')
  }
}
</script>

<style lang="scss" scoped>

</style>
