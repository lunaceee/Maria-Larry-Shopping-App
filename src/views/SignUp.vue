<template>
<div class="signUp">
  <h3>Sign-up/ Login</h3>
  <div id="firebaseui-auth-container"></div>
</div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'

const provider = new firebase.auth.GoogleAuthProvider();
export default {
  name: 'signUp',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
      ]
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig, firebaseui.auth.CredentialHelper.GOOGLE_YOLO)
  }
}
</script>

<style scoped>
.signUp {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
