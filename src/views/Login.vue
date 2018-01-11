<template>
<div class="login">
  <h3>Sign In</h3>
  <input type="text" v-model="email" placeholder="Email" @keyup.enter="signIn"><br>
  <input type="password" v-model="password" placeholder="Password" @keyup.enter="signIn"><br>
  <button v-on:click="signIn">Connection</button>
  <p>You don't have an account ? You can
    <router-link to="/sign-up">create one</router-link>
  </p>
  <div class="">
    <router-link to="/sign-up">Forgot Password</router-link>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('daily')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    }
  },
  mounted () {
    // do something after mounting vue instance
  }
}
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */

.login {
  margin-top: 40px;
  text-align: center;
}

input {
  margin: 10px 0;
  width: 80%;
  padding: 15px;
}

button {
  margin-top: 20px;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

a {
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
