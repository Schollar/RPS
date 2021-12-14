<template>
  <div>
    <form action="javascript:void(0)">
      <input type="text" ref="email_input" placeholder="Username" />
      <input type="password" ref="password_input" placeholder="Password" />
      <input
        @click="attempt_login"
        type="submit"
        value="Login"
        id="login_submit"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "login-form",
  methods: {
    attempt_login() {
      var email_input = this.$refs["email_input"].value;
      var password_input = this.$refs["password_input"].value;

      this.$axios
        .request({
          url: "https://reqres.in/api/login",
          method: "POST",
          data: {
            email: email_input,
            password: password_input,
          },
        })
        .then((response) => {
          this.$cookies.set("login_token", response.data.token);
          this.$router.push({ path: "/game" });
        })
        .catch((error) => {
          error;
          this.$emit(
            "login_attempted",
            "Sorry, there was an error logging in!"
          );
        });
    },
  },
};
</script>

<style scoped>
</style>