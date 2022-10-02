export const China = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");

  categoryHeader.innerHTML = `
      <div class="ChinaHeader" data-id="ChinaHeader">
      <div class="title">China</div>`;
  container.appendChild(categoryHeader);
})();
