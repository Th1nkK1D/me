<template>
  <div>
    <timeline title="WORK EXPERIENCE" :data="work"></timeline>
  </div>
</template>

<script>
import Timeline from './Timeline'

export default {
  name: 'Work',
  components: {
    Timeline
  },
  data() {
    return {
      work: [
        {time: "2017 - Now", head: "Front-End Developer (Freelance)", subhead: '@ H-Lab Consulting', text: ['Project: “Hospital ER Patients Management System”',"I developed a progressive web app for tablet with Angular", "and field-tested it for product improvement by collecting feedback."]},
        {time: '2017 - Now', head: "Front-End Developer (Freelance)", subhead: '@ Actimotive', text: ['Project: “Fitness Management System”','I designed a prototype and developed the cross platform web application using Angular.']},
        {
          time: '2017 - Now', head: "Front-End Developer (Volunteer)", subhead: '@ Young Passionate Program',
          text: ["A set of educational events for students organized by a group of young people who believe in power of young generation","I'm resposible for the ofiicial program website design and development."],
          link: [{url:'https://ypp.in.th', icon:'share-alt'}]
        },
        {
          time: '2016', head: "Front-End Developer (Volunteer)", subhead: '@ TEDxKMUTT',
          text: ["With my passion for self-improvement, I joined TEDxKMUTT organized by students in my university.","I developed the TEDxKMUTT 2016 website with other developers, designers, and project managers."],
          link: [{url:'https://github.com/TEDxKMUTT', icon:'social-github'}]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
