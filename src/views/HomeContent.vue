<template>
  <div>
    <login-form @login_attempted="login_attempt"></login-form>
    <h1 ref="login_message"></h1>
  </div>
</template>

<script>
import LoginForm from "@/components/HomePage/LoginForm.vue";
import cookies from "vue-cookies";
export default {
  name: "home-content",
  methods: {
    login_attempt(payload) {
      var login_token = cookies.get("login_token");
      var login_message = this.$refs["login_message"];
      if (!login_token) {
        login_message.innerText = payload;
      } else {
        login_message.innerText = "Congrats you have logged in!";
      }
    },
  },
  components: { LoginForm },
};
</script>

<style scoped>
div {
  display: grid;
  place-items: center;
  margin-top: 150px;
}
</style>