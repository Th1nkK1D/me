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
          time: "2018", head: "gOCR", subhead: ', OCR implementation with Golang',
          text: ['Mainly focus on Thai language and tested with some Thai characters, English characters and Arabic digits',"Simple Thai OCR Project, CPE489 Image Processing and Computer Vision, KMUTT"],
          link: [{url:'https://github.com/Th1nkK1D/gocr', icon:'social-github'}]
        },
        {
          time: "2017", head: "Timeable.me", subhead: ', event date/time voting web platform',
          text: ['From frustration at not being able to find the best time for a meeting with a friend,',"I spent 2 years learning Javascript with AngularJS in my spare time, designing, prototyping, testing, and developing this project."],
          link: [{url:'http://timeable.me', icon:'share-alt'}]
        },
        {
          time: '2017', head: "Dotabase", subhead: ', Dota 2 game database',
          text: ['A group project in Database and ERP System class, built with VueJS + Firebase.'],
          link: [{url:'https://dotabase-fe206.firebaseapp.com/', icon:'share-alt'},{url:'https://github.com/Th1nkK1D/Dotabase', icon:'social-github'}]
        },
        {
          time: '2017', head: "EX the Game", subhead: ', an endless mobile game developed on Unity',
          text: ['Start with a group of friends who interested in game development, I was responsible in game design, art assets and animation using Blender.']
        },
        {
          time: '2017', head: "Unicot", subhead: ', Discord music streaming bot with web UI',
          text: ['This project started when my friend and I were struggling to Discord’s music bot with the text chat.','Developed on AngularJS + Meteor.'],
          link: [{url:'https://github.com/Th1nkK1D/unicot', icon:'social-github'}]
        },
        {
          time: '2015', head: "Pseudo2C", subhead: ', pseudo-code to C converter',
          text: ['A group project in Algorithm and Data Structure class, all written in C language.'],
          link: [{url:'https://github.com/Th1nkK1D/pseudo2C', icon:'social-github'}]
        },
        {
          time: '2015', head: "Interactive Chessboard", subhead: ', a chessboard with LED movement hint',
          text: ['A group project in Computer Engineering Exploration class, using LED and switch matrix with Arduino.'],
        },
        {
          time: '2014', head: "My Personal Blog", subhead: ', written from scratch using PHP + MySQL',
          text: ["With basic website knowledge from school, I start to dig deep into it with much curiosity."]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
