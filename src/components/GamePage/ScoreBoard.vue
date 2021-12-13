<template>
  <div>
    <h1>ScoreBoard</h1>
    <p>Wins: {{ scoreboard.wins }}</p>
    <p>Ties: {{ scoreboard.tie }}</p>
    <p>Losses: {{ scoreboard.loss }}</p>
  </div>
</template>

<script>
export default {
  name: "score-board",
  computed: {
    scoreboard() {
      return this.$store.state["scoreboard"];
    },
  },
};
</script>

<style scoped>
</style>