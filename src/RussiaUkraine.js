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
          <div class="rukLeft" data-id="rukLeft">
            <div class="RukLean">Left</div>
            <div class="rukLeftOrganization" data-id="rukLeftOrganization"></div>
            <img class="rukLeftPicture" src="" alt="No image here" data-id="rukLeftPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="rukLeftArticle" data-id="rukLeftArticle"></a> 
          </div>    
          <div class="rukCenter">
            <div class="RukLean">Center</div>
            <div class="rukCenterOrganization" data-id="rukCenterOrganization"></div>
            <img class="rukCenterPicture" src="" alt="No image here" data-id="rukCenterPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="rukCenterArticle" data-id="rukCenterArticle"></a> 
          </div>  
          <div class="rukRight">
            <div class="RukLean">Right</div>
            <div class="rukRightOrganization" data-id="rukRightOrganization"></div>
            <img class="rukRightPicture" src="" alt="No image here" data-id="rukRightPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="rukRightArticle" data-id="rukRightArticle"></a> 
          </div>  
        </div>
  `;
  container.appendChild(categoryStories);
})();
