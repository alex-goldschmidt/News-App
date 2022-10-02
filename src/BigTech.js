export const BigTech = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");

  categoryHeader.innerHTML = `
    <div class="BigTechHeader" data-id="BigTechHeader">
    <div class="title">Big Tech</div>`;
  container.appendChild(categoryHeader);
})();
