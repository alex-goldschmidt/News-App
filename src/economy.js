export const Economy = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");

  categoryHeader.innerHTML = `
      <div class="EconomyHeader" data-id="EconomyHeader">
      <div class="title">Economy</div>
      <div class="buttonContainer" data-id="buttonContainer">Back</div>`;
  container.appendChild(categoryHeader);
})();
