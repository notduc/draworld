import { dataTopart } from "./data.js";
const art = document.querySelector(".art");
dataTopart.forEach((item, index, array) => {
  const template = `
    <div class="art-item">
        <div class="art-img">
          <img src="${item.artImg}" alt="" />
        </div> 
        <h3 class="artists-name">Artist: ${item.artists}</h3>
        <h4 class="art-name">${item.artName}</h4>
      </div>
      `;
  art.insertAdjacentHTML("beforeend", template);
});
