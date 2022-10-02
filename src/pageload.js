const PageLoad = (() => {
  const container = document.querySelector(".container");

  const categories = document.createElement("div");
  categories.classList.add("categories");
  categories.dataset.class = "categories";

  const header = document.createElement("div");
  header.classList.add("header");

  header.innerHTML = `
  <div class="header" data-class="header">
        <div class="title">N3W News</div>
        <div class="motto">News From 3 Points Of&nbsp;View</div>
  </div>   
  `;

  categories.innerHTML = `        
  <div class="RussiaUkraine">
  <figure class="category">
      <img class="image" src="../dist/images/Russia Ukraine.png" alt="m1">
      <figcaption>Russia & Ukraine</figcaption>
  </figure>
  </div>
 
  <div class="BigTech">
  <figure class="category">
      <img class="image" src="../dist/images/Big tech.png" alt="m1">
      <figcaption>Big Tech</figcaption>
  </figure>
  </div>
  
  <div class="Economy">
  <figure class="category">
      <img class="image" src="../dist/images/Economy.png" alt="m1">
      <figcaption>Economy</figcaption>
  </figure>
  </div>

  <div class="Congress">
  <figure class="category">
      <img class="image" src="../dist/images/Congress.png" alt="m1">
      <figcaption>Congress</figcaption>
  </figure>
  </div>

  <div class="China">
  <figure class="category">
      <img class="image" src="../dist/images/China.png" alt="m1">
      <figcaption>China</figcaption>
  </figure> 
  </div>
  `;

  container.appendChild(header);
  container.appendChild(categories);
})();

export { PageLoad };
