<template>
  <div class="timeline">
    <div class="card" v-for="(event,e) in data" :key="e">
      <p class="time">{{event.time}}</p>
      <p class="head"><strong>{{event.head}}</strong> {{event.subhead}}</p>
      <p><span v-for="(line,l) in event.text" :key="l">{{line}}<br></span></p>

      <div class="spacer" v-if="e < data.length-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  props: ['data']
}
</script>

<style lang="scss" scoped>
  .timeline {
    border: 0 #CBC2DF solid;
    border-left-width: 1px;

    .card {
      padding: 0 20px;

      p {
        margin: 0;
      }

      .time {
        font-size: 12px;
        margin-bottom: 5px;
        color: #5F537B;
      }

      .head {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 8px;
        color: #5F537B;
      }

      .spacer {
        height: 40px;
      }
    }
  }
</style>
