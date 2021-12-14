<template>
  <!-- Checking to see if the user has a valid login token, if not shows the first div, if they do it shows the second div which is our game -->
  <div v-if="login_token === null">
    <h1>You need to login to play the game!</h1>
    <button @click="this.go_to_home">BACK</button>
  </div>
  <div v-else>
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

  data() {
    // Getting our login token to check if its valid above
    return {
      login_token: this.$cookies.get("login_token"),
    };
  },
  name: "game-page",

  computed: {
    // Getting the data we need
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

  methods: {
    // A function to send us back to the homepage, gets called when user is not logged in and clicks back button
    go_to_home() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
div {
  display: grid;
  place-items: center;
}
.selection_container {
  display: grid;
  grid-auto-flow: column;
  gap: 50px;
}

img {
  max-width: 300px;
  height: 250px;
}
</style>