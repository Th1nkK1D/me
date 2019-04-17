<template>
  <div>
    <timeline title="EDUCATION" :data="education" ref="Timeline"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import { education } from '@/assets/data/education.json'

export default {
  name: 'Education',
  components: {
    Timeline
  },
  data() {
    return {
      education
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
