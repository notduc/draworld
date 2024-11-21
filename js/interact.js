const solidHeart = document.querySelectorAll(".solid-heart");
solidHeart.forEach((interaction) => {
  let count = 1;
  if (count === 1) {
    interaction.className = "fa-regular fa-heart solid-heart";
  }
  interaction.addEventListener("click", () => {
    count++;
    if (count % 2 === 0) {
      interaction.className = "fa-solid fa-heart solid-heart";
    } else {
      interaction.className = "fa-regular fa-heart solid-heart";
    }
  });
});
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searching");
  filter = input.value.toUpperCase();
  ul = document.getElementById("dropdown-text");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
