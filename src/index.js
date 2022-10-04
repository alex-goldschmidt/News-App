import { PageLoad } from "./pageload";
import { RussiaUkraine } from "./RussiaUkraine";
import { BigTech } from "./BigTech";
import { Economy } from "./economy";
import { Congress } from "./congress";
import { China } from "./china";

//headers for each page
const mainHeader = document.querySelector(`[data-id="mainHeaderContent"]`);
const RussiaUkraineHeader = document.querySelector(
  `[data-id="RussiaUkraineHeader"]`
);
const BigTechHeader = document.querySelector(`[data-id="BigTechHeader"]`);
const EconomyHeader = document.querySelector(`[data-id="EconomyHeader"]`);
const CongressHeader = document.querySelector(`[data-id="CongressHeader"]`);
const ChinaHeader = document.querySelector(`[data-id="ChinaHeader"]`);
//

//cards on the home page
const RussiaUkraineBox = document.querySelector(`[data-id="RussiaUkraine"]`);
const BigTechBox = document.querySelector(`[data-id="BigTech"]`);
const EconomyBox = document.querySelector(`[data-id="Economy"]`);
const CongressBox = document.querySelector(`[data-id="Congress"]`);
const ChinaBox = document.querySelector(`[data-id="China"]`);
const categories = document.querySelector(`[data-id="CategoryContent"]`);

RussiaUkraineBox.addEventListener("click", () => {
  RussiaUkraineHeader.style.display = "initial";
  RukStoriesBlock.style.display = "flex";
  BigTechHeader.style.display = "none";
  EconomyHeader.style.display = "none";
  CongressHeader.style.display = "none";
  ChinaHeader.style.display = "none";
  mainHeader.style.display = "none";
  categories.style.display = "none";
});

BigTechBox.addEventListener("click", () => {
  BigTechHeader.style.display = "initial";
  RussiaUkraineHeader.style.display = "none";
  EconomyHeader.style.display = "none";
  CongressHeader.style.display = "none";
  ChinaHeader.style.display = "none";
  mainHeader.style.display = "none";
  categories.style.display = "none";
});

EconomyBox.addEventListener("click", () => {
  EconomyHeader.style.display = "initial";
  BigTechHeader.style.display = "none";
  CongressHeader.style.display = "none";
  RussiaUkraineHeader.style.display = "none";
  ChinaHeader.style.display = "none";
  categories.style.display = "none";
  mainHeader.style.display = "none";
});

CongressBox.addEventListener("click", () => {
  CongressHeader.style.display = "initial";
  BigTechHeader.style.display = "none";
  EconomyHeader.style.display = "none";
  RussiaUkraineHeader.style.display = "none";
  ChinaHeader.style.display = "none";
  categories.style.display = "none";
  mainHeader.style.display = "none";
});

ChinaBox.addEventListener("click", () => {
  ChinaHeader.style.display = "initial";
  BigTechHeader.style.display = "none";
  CongressHeader.style.display = "none";
  RussiaUkraineHeader.style.display = "none";
  EconomyHeader.style.display = "none";
  categories.style.display = "none";
  mainHeader.style.display = "none";
});
//

//stories card for each category's page
const RukStoriesBlock = document.querySelector(`[data-id="RukStoriesBlock"]`);
RukStoriesBlock.style.display = "none";
//

//targets back button to bring user back home, while clearing all other contents
const BackButton = document.querySelectorAll(`[data-id="buttonContainer"]`);
function AllBackButtons() {
  for (let i = 0; i < BackButton.length; i++) {
    BackButton[i].addEventListener("click", () => {
      mainHeader.style.display = "initial";
      categories.style.display = "flex";
      BigTechHeader.style.display = "none";
      EconomyHeader.style.display = "none";
      RussiaUkraineHeader.style.display = "none";
      ChinaHeader.style.display = "none";
      CongressHeader.style.display = "none";
      RukStoriesBlock.style.display = "none";
    });
  }
}
AllBackButtons();
