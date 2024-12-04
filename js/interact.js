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
const artItem = document.querySelectorAll(".art-item");
artItem.forEach((transfer) => {
  transfer.addEventListener("click", () => {
    window.location.href = "../html/detail.html";
  });
});
