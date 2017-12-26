<template>
  <div>
    <timeline title="Projects" :data="project"></timeline>
  </div>
</template>

<script>
import Timeline from './Timeline'

export default {
  name: 'Project',
  components: {
    Timeline
  },
  data() {
    return {
      project: [
        {
          time: "2017", head: "Timeable.me", subhead: ', Event date/time voting web platformg',
          text: ['From frustration at not being able to find the best time for a meeting with a friend,',"I spent 2 years learning Javascript in my spare time, designing, prototyping, testing, and developing this project."],
          link: [{url:'http://google.com', icon:'social-github'},{url:'http://google.com', icon:'link'}]
        },
        {time: '2017', head: "Unicot", subhead: ', Discord music streaming bot with web UI', text: ['This project started when my friend and I were struggling to Discord’s music bot with the text chat.']},
        {time: '2014', head: "My Personal Blog", subhead: ', written from scratch using PHP + MySQL', text: ["With basic website knowledge from school, I start to dig deep into it with much curiosity."]},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
