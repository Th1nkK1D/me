<template>
  <div>
    <timeline title="WORK EXPERIENCE" :data="work" ref="Timeline"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import { work } from '@/assets/data/work.json'

export default {
  name: 'Work',
  components: {
    Timeline
  },
  data() {
    return {
      work
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
