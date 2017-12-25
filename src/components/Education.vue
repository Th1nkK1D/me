<template>
  <div>
    <timeline title="EDUCATION" :data="education"></timeline>
  </div>
</template>

<script>
import Timeline from './Timeline'

export default {
  name: 'Education',
  components: {
    Timeline
  },
  data() {
    return {
      education: [
        {time: "Now, since Aug '15", head: "King Mongkut's University of Technology Thonburi", subhead: ', Bangkok, Thailand', text: ["Bachelor of Engineering Program in Computer Engineering (International Program)", "GPA 3.72 out of 4 (4 semesters) - Expected May 2019"]},
        {time: '2017', head: "Jÿvaskÿla University of Technology", subhead: ', Jÿvaskÿla, Finland', text: ["A semester exchange program in the IT department with Erasmus+ Global Scholarship"]},
        {time: '2016', head: "École d’ingénieurs", subhead: ', Paris, France', text: ["A summer program in Operating Systems"]},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
