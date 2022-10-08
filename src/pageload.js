export const PageLoad = (() => {
  const container = document.querySelector(".container");

  const categories = document.createElement("div");
  const mainHeader = document.createElement("div");

  mainHeader.innerHTML = `
  <div class="mainHeaderContent" data-id="mainHeaderContent">
        <div class="title">N3W News</div>
        <div class="motto">News From 3 Points Of&nbsp;View</div>
  </div>    
  `;

  categories.innerHTML = `
  <div class="CategoryContent" data-id="CategoryContent">     
  <div class="RussiaUkraine" data-id="RussiaUkraine">
  <figure class="category">
      <img class="image" src="../dist/images/Russia Ukraine.png" alt="m1">
      <figcaption>Russia & Ukraine</figcaption>
  </figure>
  </div>
 
  <div class="BigTech" data-id="BigTech">
  <figure class="category">
      <img class="image" src="../dist/images/Big tech.png" alt="m1">
      <figcaption>Big Tech</figcaption>
  </figure>
  </div>
  
  <div class="Economy" data-id="Economy">
  <figure class="category">
      <img class="image" src="../dist/images/Economy.png" alt="m1">
      <figcaption>Economy</figcaption>
  </figure>
  </div>

  <div class="Congress" data-id="Congress">
  <figure class="category">
      <img class="image" src="../dist/images/Congress.png" alt="m1">
      <figcaption>Politics</figcaption>
  </figure>
  </div>

  <div class="China" data-id="China">
  <figure class="category">
      <img class="image" src="../dist/images/China.png" alt="m1">
      <figcaption>China</figcaption>
  </figure> 
  </div>
  </div>
  `;
  container.appendChild(mainHeader);
  container.appendChild(categories);
})();
