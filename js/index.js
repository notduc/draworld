const In = document.querySelector("#In");
const Up = document.querySelector("#Up");
const logOut = document.querySelector("#logOut");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    // console.log(uid);
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
const searching = document.querySelector("#searching");
const dropdownText = document.querySelector(".dropdown-text");
const dropdownTextItem = document.querySelectorAll(".dropdown-text li");
searching.addEventListener("keyup", () => {
  dropdownText.style.display = "block";
  const searchValue = searching.value.toUpperCase();
  console.log(searchValue);
  for (i = 0; i < dropdownTextItem.length; i++) {
    const txt = dropdownTextItem[i].querySelectorAll("p")[0];
    const txtValue = txt.textContent || txt.innerText;
    if (txtValue.toUpperCase().indexOf(searchValue) > -1) {
      dropdownTextItem[i].style.display = "";
    } else {
      dropdownTextItem[i].style.display = "none";
    }
  }
});

searching.addEventListener("blur", () => {
  dropdownText.style.display = "none";
});
