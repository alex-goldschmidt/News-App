export const BigTech = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");
  categoryHeader.innerHTML = `
    <div class="BigTechHeader" data-id="BigTechHeader">
    <div class="title">Big Tech</div>
    <div class="buttonContainer" data-id="buttonContainer">Back</div>`;
  container.appendChild(categoryHeader);

  const categoryStories = document.createElement("div");
  categoryStories.classList.add("BigTechStories");
  categoryStories.innerHTML = `
  <div class="BigTechStoriesBlock" data-id="BigTechStoriesBlock">
          <div class="BigTechLeft" data-id="BigTechLeft">
            <div class="BigTechLean">Left</div>
            <div class="BigTechLeftOrganization" data-id="BigTechLeftOrganization"></div>
            <img class="BigTechLeftPicture" src="" alt="No image available" data-id="BigTechLeftPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="BigTechLeftArticle" data-id="BigTechLeftArticle"></a> 
          </div>    
          <div class="BigTechCenter">
            <div class="BigTechLean">Center</div>
            <div class="BigTechCenterOrganization" data-id="BigTechCenterOrganization"></div>
            <img class="BigTechCenterPicture" src="" alt="No image available" data-id="BigTechCenterPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="BigTechCenterArticle" data-id="BigTechCenterArticle"></a> 
          </div>  
          <div class="BigTechRight">
            <div class="BigTechLean">Right</div>
            <div class="BigTechRightOrganization" data-id="BigTechRightOrganization"></div>
            <img class="BigTechRightPicture" src="" alt="No image available" data-id="BigTechRightPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="BigTechRightArticle" data-id="BigTechRightArticle"></a> 
          </div>  
        </div>
  `;
  container.appendChild(categoryStories);
})();
