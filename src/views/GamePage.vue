<template>
  <div>
    <score-board></score-board>
    <section class="selection_container">
      <user-selection></user-selection>
      <computer-selection></computer-selection>
    </section>
  </div>
</template>

<script>
import ComputerSelection from "../components/GamePage/ComputerSelection.vue";
import ScoreBoard from "@/components/GamePage/ScoreBoard.vue";
import UserSelection from "../components/GamePage/UserSelection.vue";
export default {
  components: { UserSelection, ComputerSelection, ScoreBoard },
  name: "game-page",
  computed: {
    user_selected() {
      return this.$store.state["user_selection"];
    },
    computer_selection() {
      return this.$store.state["computer_selection"];
    },
    scoreboard() {
      return this.$store.state["scoreboard"];
    },
  },
  method: {
    getWinner(user_selection, compSelection) {
      if (user_selection.name === compSelection.name) {
        this.scoreboard.tie = 2;
        this.$store.commit("update_scoreboard", this.scoreboard.tie);
      }
    },
  },
};
</script>

<style scoped>
</style>