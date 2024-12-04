const searching = document.querySelector("#searching");
const dropdownText = document.querySelector(".dropdown-text");
const dropdownTextItem = document.querySelectorAll(".dropdown-text li");
searching.addEventListener("keyup", () => {
  dropdownText.style.display = "block";
  const searchValue = searching.value.toUpperCase();
  //   console.log(searchValue);
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
