export const Economy = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");
  categoryHeader.innerHTML = `
      <div class="EconomyHeader" data-id="EconomyHeader">
      <div class="title">Economy</div>
      <div class="buttonContainer" data-id="buttonContainer">Back</div>`;
  container.appendChild(categoryHeader);

  const categoryStories = document.createElement("div");
  categoryStories.classList.add("EconomyStories");
  categoryStories.innerHTML = `
  <div class="EconomyStoriesBlock" data-id="EconomyStoriesBlock">
          <div class="EconomyLeft" data-id="EconomyLeft">
            <div class="EconomyLean">Left</div>
            <div class="EconomyLeftOrganization" data-id="EconomyLeftOrganization"></div>
            <img class="EconomyLeftPicture" src="" alt="No image available" data-id="EconomyLeftPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="EconomyLeftArticle" data-id="EconomyLeftArticle"></a> 
          </div>    
          <div class="EconomyCenter">
            <div class="EconomyLean">Center</div>
            <div class="EconomyCenterOrganization" data-id="EconomyCenterOrganization"></div>
            <img class="EconomyCenterPicture" src="" alt="No image available" data-id="EconomyCenterPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="EconomyCenterArticle" data-id="EconomyCenterArticle"></a> 
          </div>  
          <div class="EconomyRight">
            <div class="EconomyLean">Right</div>
            <div class="EconomyRightOrganization" data-id="EconomyRightOrganization"></div>
            <img class="EconomyRightPicture" src="" alt="No image available" data-id="EconomyRightPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="EconomyRightArticle" data-id="EconomyRightArticle"></a> 
          </div>  
        </div>
  `;
  container.appendChild(categoryStories);
})();
