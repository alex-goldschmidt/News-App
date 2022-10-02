export const Congress = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");

  categoryHeader.innerHTML = `
      <div class="CongressHeader" data-id="CongressHeader">
      <div class="title">Congress</div>`;
  container.appendChild(categoryHeader);
})();
