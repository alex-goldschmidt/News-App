export const RussiaUkraine = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");

  categoryHeader.innerHTML = `
  <div class="RussiaUkraineHeader" data-id="RussiaUkraineHeader">
  <div class="title">Russia and Ukraine</div>`;
  container.appendChild(categoryHeader);
})();
