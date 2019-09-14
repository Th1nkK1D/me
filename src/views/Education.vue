<template>
  <div>
    <timeline title="EDUCATION" :data="education" ref="Timeline"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import db from '../db'

export default {
  name: 'Education',
  components: {
    Timeline
  },
  data() {
    return {
      education: []
    }
  },
  firebase: {
    education: db.ref('education')
  }
}
</script>

<style lang="scss" scoped>

</style>
