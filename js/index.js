const In = document.querySelector("#In");
const Up = document.querySelector("#Up");
const logOut = document.querySelector("#logOut");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    console.log(uid);
    if (uid) {
      In.style.display = "none";
      Up.style.display = "none";
      logOut.style.display = "block";
    }
  }
});
logOut.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      In.style.display = "block";
      Up.style.display = "block";
      logOut.style.display = "none";
    })
    .catch((error) => {
      // An error happened.
    });
});
