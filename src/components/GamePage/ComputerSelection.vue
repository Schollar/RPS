<template>
  <div>
    <h1>Computer Selection</h1>
    <section class="comp_selection_container">
      <p>{{ computer_selection.name }}</p>
      <img :src="computer_selection.img_src" alt="" />
    </section>
  </div>
</template>

<script>
export default {
  name: "computer-selection",
  computed: {
    computer_selection() {
      // Getting data from the store and displaying it on the page above in our HTML
      return this.$store.state["computer_selection"];
    },
  },
};
</script>

<style>
.comp_selection_container {
  display: grid;
  place-items: center;
}
</style>