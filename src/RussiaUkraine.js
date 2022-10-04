export const RussiaUkraine = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");
  categoryHeader.innerHTML = `
  <div class="RussiaUkraineHeader" data-id="RussiaUkraineHeader">
  <div class="title">Russia and Ukraine</div>
  <div class="buttonContainer" data-id="buttonContainer">Back</div>`;

  container.appendChild(categoryHeader);

  const categoryStories = document.createElement("div");
  categoryStories.classList.add("RussiaUkraineStories");
  categoryStories.innerHTML = `
  <div class="RukStoriesBlock" data-id="RukStoriesBlock">
          <div class="rukLeft">
            <div class="lean">Left</div>
            <div class="rukLeftOrganization" data-id="rukLeftOrganization">Organization</div>
            <img class="rukLeftPicture" src="" alt="" data-id="rukLeftPicture"/>
            <div class="rukLeftArticle" data-id="rukLeftArticle">This is an article</div> 
          </div>    
          <div class="rukCenter">
            <div class="lean">Center</div>
            <div>Organization</div>
            <img src="" alt="" />
            <div>This is an article</div>
          </div>  
          <div class="rukRight">
            <div class="lean">Right</div>
            <div>Organization</div>
            <img src="" alt="" />
            <div>This is an article</div>
          </div>  
        </div>
  `;
  container.appendChild(categoryStories);
})();
