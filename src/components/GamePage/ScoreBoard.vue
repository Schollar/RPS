<template>
  <div>
    <h1>ScoreBoard</h1>
    <section class="scoreboard_container">
      <p>Wins: {{ scoreboard.wins }}</p>
      <p>Ties: {{ scoreboard.tie }}</p>
      <p>Losses: {{ scoreboard.loss }}</p>
    </section>
    <h3>{{ scoreboard.message }}</h3>
  </div>
</template>

<script>
export default {
  name: "score-board",
  computed: {
    scoreboard() {
      // Getting data from store and displaying it on the page above in our HTML
      return this.$store.state["scoreboard"];
    },
  },
};
</script>

<style >
.scoreboard_container {
  display: grid;
  grid-auto-flow: column;
  column-gap: 50px;
}
</style>