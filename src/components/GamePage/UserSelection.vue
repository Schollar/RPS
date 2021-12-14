<template>
  <div>
    <h1>User Selection</h1>
    <section class="button_container">
      <button @click="user_select('rock')">Rock</button>
      <button @click="user_select('paper')">Paper</button>
      <button @click="user_select('scissors')">Scissors</button>
    </section>
    <section class="user_selection_container">
      <!-- Just showinng some of our data on the page -->
      <p>{{ selection.name }}</p>
      <img :src="selection.img_src" alt="" />
    </section>
    <!-- Passing in the name of what user is chosen to our function -->
  </div>
</template>

<script>
export default {
  name: "user-selection",
  // This is the function that sets everything in motion, the user selects their choice and everthing gets set in motion after a couple timeouts to make it seem like our computer actually thinks
  methods: {
    user_select(value) {
      this.$store.commit("user_select", value);
      this.$store.commit("update_game_message", "Computer Is Picking...");
      setTimeout(() => this.$store.commit("computer_select"), 1500);
      setTimeout(
        () => this.getWinner(this.selection, this.computer_selection),
        2000
      );
    },
    //This function is one giant if else, that checks to see who won the round, and calls the mutations based on that which chages our data, which changes what is displayed on the screen
    getWinner(user_selection, compSelection) {
      if (user_selection.name === compSelection.name) {
        this.scoreboard.tie++;
        this.$store.commit("update_scoreboard_tie", this.scoreboard.tie);
        this.$store.commit("update_game_message", "It was a tie!");
      } else if (
        user_selection.name === "Rock" &&
        compSelection.name === "Paper"
      ) {
        this.scoreboard.loss++;
        this.$store.commit("update_scoreboard_loss", this.scoreboard.loss);
        this.$store.commit("update_game_message", "Sorry you lost!");
      } else if (
        user_selection.name === "Rock" &&
        compSelection.name === "Scissors"
      ) {
        this.scoreboard.wins++;
        this.$store.commit("update_scoreboard_wins", this.scoreboard.wins);
        this.$store.commit("update_game_message", "You won!");
      } else if (
        user_selection.name === "Paper" &&
        compSelection.name === "Rock"
      ) {
        this.scoreboard.wins++;
        this.$store.commit("update_scoreboard_wins", this.scoreboard.wins);
        this.$store.commit("update_game_message", "You won!");
      } else if (
        user_selection.name === "Paper" &&
        compSelection.name === "Scissors"
      ) {
        this.scoreboard.loss++;
        this.$store.commit("update_scoreboard_loss", this.scoreboard.loss);
        this.$store.commit("update_game_message", "Sorry you lost!");
      } else if (
        user_selection.name === "Scissors" &&
        compSelection.name === "Paper"
      ) {
        this.scoreboard.wins++;
        this.$store.commit("update_scoreboard_wins", this.scoreboard.wins);
        this.$store.commit("update_game_message", "You won!");
      } else if (
        user_selection.name === "Scissors" &&
        compSelection.name === "Rock"
      ) {
        this.scoreboard.loss++;
        this.$store.commit("update_scoreboard_loss", this.scoreboard.loss);
        this.$store.commit("update_game_message", "Sorry you lost!");
      }
    },
  },
  // Getting our data from the vuex store
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

<style >
.button_container {
  display: grid;
  grid-auto-flow: column;
  column-gap: 25px;
}
.user_selection_container {
  display: grid;
  place-items: center;
}
</style>