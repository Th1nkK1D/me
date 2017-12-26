<template>
  <div>
    <timeline title="Activities" :data="activity"></timeline>
  </div>
</template>

<script>
import Timeline from './Timeline'

export default {
  name: 'Activities',
  components: {
    Timeline
  },
  data() {
    return {
      activity: [
        {time: "Now", head: "President of Computer Engineering Class of 2015"},
        {
          time: '2017', head: "Facebook Developer Circle Hackathon", subhead: ', Thailand 2017',
          text: ['CodieDoggy, Code hinter bot on Facebook Messenger'],
          link: [{url:'https://github.com/Th1nkK1D/CodieDoggy', icon:'social-github'}]
        },
        {
          time: '2017', head: "Thailand Stupid Hackathon", subhead: ', 1st runner-up award',
          text: ['Swallom, restaurant radomizer PWA based on the current location'],
          link: [{url:'https://swallom-1506749334555.firebaseapp.com', icon:'share-alt'},{url:'https://github.com/Th1nkK1D/swallom', icon:'social-github'}]
        },
        {time: '2017', head: "UX Classroom Student", subhead: ', series of UX intensive course.', text: ["Organized by group of Thai UX expertise, they provide an UX knowledge with hands-on experience."]},
        {time: '2015', head: "Web Development Lead Instructor", subhead: ', Computer Engineering Camp, KMUTT', text: ["Taught the basic knowledge of web development to inspire the high school students."]},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
