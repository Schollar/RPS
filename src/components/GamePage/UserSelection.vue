<template>
  <div>
    <h1>User Selection</h1>
    <section class="user_selection_container">
      <p>{{ selection.name }} Selected!!</p>
      <img :src="selection.img_src" alt="" />
    </section>
    <button @click="user_select('rock')">Rock</button>
    <button @click="user_select('paper')">Paper</button>
    <button @click="user_select('scissors')">Scissors</button>
  </div>
</template>

<script>
export default {
  name: "user-selection",
  methods: {
    user_select(value) {
      this.$store.commit("user_select", value);
      this.$store.commit("computer_select");
      this.getWinner(this.selection, this.computer_selection);
    },

    getWinner(user_selection, compSelection) {
      if (user_selection.name === compSelection.name) {
        this.scoreboard.tie++;
        this.$store.commit("update_scoreboard_tie", this.scoreboard.tie);
      } else if (
        user_selection.name === "Rock" &&
        compSelection.name === "Paper"
      ) {
        this.scoreboard.loss++;
        this.$store.commit("update_scoreboard_loss", this.scoreboard.loss);
      } else if (
        user_selection.name === "Rock" &&
        compSelection.name === "Scissors"
      ) {
        this.scoreboard.wins++;
        this.$store.commit("update_scoreboard_wins", this.scoreboard.wins);
      } else if (
        user_selection.name === "Paper" &&
        compSelection.name === "Rock"
      ) {
        this.scoreboard.wins++;
        this.$store.commit("update_scoreboard_wins", this.scoreboard.wins);
      } else if (
        user_selection.name === "Paper" &&
        compSelection.name === "Scissors"
      ) {
        this.scoreboard.loss++;
        this.$store.commit("update_scoreboard_loss", this.scoreboard.loss);
      } else if (
        user_selection.name === "Scissors" &&
        compSelection.name === "Paper"
      ) {
        this.scoreboard.wins++;
        this.$store.commit("update_scoreboard_wins", this.scoreboard.wins);
      } else if (
        user_selection.name === "Scissors" &&
        compSelection.name === "Rock"
      ) {
        this.scoreboard.loss++;
        this.$store.commit("update_scoreboard_loss", this.scoreboard.loss);
      }
    },
  },
  computed: {
    computer_selection() {
      return this.$store.state["computer_selection"];
    },
    scoreboard() {
      return this.$store.state["scoreboard"];
    },
    selection() {
      return this.$store.state["user_selection"];
    },
  },
};
</script>

<style scoped>
</style>