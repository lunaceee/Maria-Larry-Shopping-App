import firebase from "firebase";

const UPDATE_USER = state => {
  state.user = firebase.auth().currentUser;
};

export default {
  UPDATE_USER
};
