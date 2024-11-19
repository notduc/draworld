import { dataArt } from "./data2.js";
const product = document.querySelector(".products");
dataArt.forEach((item, index, array) => {
  const template = `
  <div class="product-parent">
    <div class="product-container">
        <p>Artists: ${item.productArtists}</p>
        <p>${item.productName}</p>
        <div class="modified">
          <i class="fa-regular fa-comment"></i>
          <i name="interaction" class="fa-regular fa-heart solid-heart"></i>
          <i class="fa-solid fa-chart-simple"></i>
        </div>
      </div>
      <div class="product-img">
        <img src="${item.productImg}" alt="">
      </div>
      </div>
    `;
  product.insertAdjacentHTML("beforeend", template);
});
