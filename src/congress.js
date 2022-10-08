export const Congress = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");
  categoryHeader.innerHTML = `
      <div class="CongressHeader" data-id="CongressHeader">
      <div class="title">Congress</div>
      <div class="buttonContainer" data-id="buttonContainer">Back</div>`;
  container.appendChild(categoryHeader);

  const categoryStories = document.createElement("div");
  categoryStories.classList.add("CongressStories");
  categoryStories.innerHTML = `
  <div class="CongressStoriesBlock" data-id="CongressStoriesBlock">
          <div class="CongressLeft" data-id="CongressLeft">
            <div class="CongressLean">Left</div>
            <div class="CongressLeftOrganization" data-id="CongressLeftOrganization"></div>
            <img class="CongressLeftPicture" src="" alt="No image available" data-id="CongressLeftPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="CongressLeftArticle" data-id="CongressLeftArticle"></a> 
          </div>    
          <div class="CongressCenter">
            <div class="CongressLean">Center</div>
            <div class="CongressCenterOrganization" data-id="CongressCenterOrganization"></div>
            <img class="CongressCenterPicture" src="" alt="No image available" data-id="CongressCenterPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="CongressCenterArticle" data-id="CongressCenterArticle"></a> 
          </div>  
          <div class="CongressRight">
            <div class="CongressLean">Right</div>
            <div class="CongressRightOrganization" data-id="CongressRightOrganization"></div>
            <img class="CongressRightPicture" src="" alt="No image available" data-id="CongressRightPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="CongressRightArticle" data-id="CongressRightArticle"></a> 
          </div>  
        </div>
  `;
  container.appendChild(categoryStories);
})();
