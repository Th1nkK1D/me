<template>
  <div>
    <timeline title="Activities" :data="activities" ref="Timeline"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import { activities } from '@/assets/data/activities.json'

export default {
  name: 'Activities',
  components: {
    Timeline
  },
  data() {
    return {
      activities
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
