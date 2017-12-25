<template>
  <div class="timeline">
    <div class="card">
      <p class="time">Now</p>
      <p class="head"><strong>King Mongkut's University of Technology Thonburi</strong>, Bangkok, Thailand</p>
      <p>Bachelor of Engineering Program in Computer Engineering (International Program) <br>GPA 3.72 out of 4 (4 semesters) - Expected May 2019</p>
    </div>
    <div class="card">
      <p class="time">Now</p>
      <p class="head"><strong>King Mongkut's University of Technology Thonburi</strong>, Bangkok, Thailand</p>
      <p>Bachelor of Engineering Program in Computer Engineering (International Program) <br>GPA 3.72 out of 4 (4 semesters) - Expected May 2019</p>
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
      padding: 0 20px 40px 20px;

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
    }
  }
</style>
