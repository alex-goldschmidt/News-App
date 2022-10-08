export const China = (() => {
  const container = document.querySelector(".container");

  const categoryHeader = document.createElement("div");
  categoryHeader.innerHTML = `
      <div class="ChinaHeader" data-id="ChinaHeader">
      <div class="title">China</div>
      <div class="buttonContainer" data-id="buttonContainer">Back</div>`;
  container.appendChild(categoryHeader);

  const categoryStories = document.createElement("div");
  categoryStories.classList.add("ChinaStories");
  categoryStories.innerHTML = `
  <div class="ChinaStoriesBlock" data-id="ChinaStoriesBlock">
          <div class="ChinaLeft" data-id="ChinaLeft">
            <div class="ChinaLean">Left</div>
            <div class="ChinaLeftOrganization" data-id="ChinaLeftOrganization"></div>
            <img class="ChinaLeftPicture" src="" alt="No image available" data-id="ChinaLeftPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="ChinaLeftArticle" data-id="ChinaLeftArticle"></a> 
          </div>    
          <div class="ChinaCenter">
            <div class="ChinaLean">Center</div>
            <div class="ChinaCenterOrganization" data-id="ChinaCenterOrganization"></div>
            <img class="ChinaCenterPicture" src="" alt="No image available" data-id="ChinaCenterPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="ChinaCenterArticle" data-id="ChinaCenterArticle"></a> 
          </div>  
          <div class="ChinaRight">
            <div class="ChinaLean">Right</div>
            <div class="ChinaRightOrganization" data-id="ChinaRightOrganization"></div>
            <img class="ChinaRightPicture" src="" alt="No image available" data-id="ChinaRightPicture"/>
            <a target="_blank" rel="noopener noreferrer" class="ChinaRightArticle" data-id="ChinaRightArticle"></a> 
          </div>  
        </div>
  `;
  container.appendChild(categoryStories);
})();
