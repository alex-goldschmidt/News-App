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

const RussiaUkraineStories = document.querySelector(".RussiaUkraineStories");
const rukLeftOrganization = document.querySelector(
  `[data-id="rukLeftOrganization"]`
);
const rukLeftArticle = document.querySelector(`[data-id="rukLeftArticle"]`);
const rukLeftPicture = document.querySelector(`[data-id="rukLeftPicture"]`);

const rukCenterOrganization = document.querySelector(
  `[data-id="rukCenterOrganization"]`
);
const rukCenterArticle = document.querySelector(`[data-id="rukCenterArticle"]`);
const rukCenterPicture = document.querySelector(`[data-id="rukCenterPicture"]`);

const rukRightOrganization = document.querySelector(
  `[data-id="rukRightOrganization"]`
);
const rukRightArticle = document.querySelector(`[data-id="rukRightArticle"]`);
const rukRightPicture = document.querySelector(`[data-id="rukRightPicture"]`);

const BigTechStories = document.querySelector(".BigTechStories");
const BigTechLeftOrganizaton = document.querySelector(
  `[data-id="BigTechLeftOrganization"]`
);
const BigTechLeftArticle = document.querySelector(
  `[data-id="BigTechLeftArticle"]`
);
const BigTechLeftPicture = document.querySelector(
  `[data-id="BigTechLeftPicture"]`
);
const BigTechCenterOrganization = document.querySelector(
  `[data-id="BigTechCenterOrganization"]`
);
const BigTechCenterArticle = document.querySelector(
  `[data-id="BigTechCenterArticle"]`
);
const BigTechCenterPicture = document.querySelector(
  `[data-id="BigTechCenterPicture"]`
);

const BigTechRightOrganization = document.querySelector(
  `[data-id="BigTechRightOrganization"]`
);
const BigTechRightArticle = document.querySelector(
  `[data-id="BigTechRightArticle"]`
);
const BigTechRightPicture = document.querySelector(
  `[data-id="BigTechRightPicture"]`
);

RussiaUkraineBox.addEventListener("click", () => {
  RussiaUkraineHeader.style.display = "initial";
  RukStoriesBlock.style.display = "flex";
  RussiaUkraineStories.style.display = "block";
  BigTechHeader.style.display = "none";
  EconomyHeader.style.display = "none";
  CongressHeader.style.display = "none";
  ChinaHeader.style.display = "none";
  mainHeader.style.display = "none";
  categories.style.display = "none";
  BigTechStories.style.display = "none";
});

BigTechBox.addEventListener("click", () => {
  BigTechHeader.style.display = "initial";
  BigTechStoriesBlock.style.display = "flex";
  BigTechStories.style.display = "block";
  RussiaUkraineHeader.style.display = "none";
  EconomyHeader.style.display = "none";
  CongressHeader.style.display = "none";
  ChinaHeader.style.display = "none";
  mainHeader.style.display = "none";
  categories.style.display = "none";
  RussiaUkraineStories.style.display = "none";
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
const BigTechStoriesBlock = document.querySelector(
  `[data-id="BigTechStoriesBlock"]`
);
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
      RussiaUkraineStories.style.display = "none";
      BigTechStories.style.display = "none";
    });
  }
}
AllBackButtons();

window.addEventListener("load", () => {
  FetchRussiaUkraineNews();
  FetchBigTechNews();
});

async function FetchRussiaUkraineNews() {
  const RukResponse = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_119111e2cfeb9f7cabec19ab21c7533e88904&q=ukraine&language=en&country=us,gb`,
    { mode: "cors" }
  );
  const RukData = await RukResponse.json();

  //this goes over all array results
  function fetchRussiaUkraineLeft() {
    console.log(RukData);
    RukData.results.forEach((obj, i) => {
      console.log("Source:", obj.source_id);
      console.log("Title:", obj.title);
      if (
        obj.source_id == "businessinsider_us" ||
        obj.source_id == "cnn" ||
        obj.source_id == "washingtonpost" ||
        obj.source_id == "nbc" ||
        obj.source_id == "cbsnews" ||
        obj.source_id == "msnbc" ||
        obj.source_id == "npr" ||
        obj.source_id == "abcnews" ||
        obj.source_id == "insider" ||
        obj.source_id == "yahoo" ||
        obj.source_id == "vox" ||
        obj.source_id == "thescottishsun"
      ) {
        rukLeftOrganization.innerText = obj.source_id.toUpperCase();
        rukLeftArticle.innerText = obj.title;
        rukLeftArticle.href = obj.link;
        rukLeftPicture.src = obj.image_url;
      }
    });
  }
  fetchRussiaUkraineLeft();

  //this goes over all array results
  function fetchRussiaUkraineRight() {
    console.log(RukData);
    RukData.results.forEach((obj, i) => {
      console.log("Source:", obj.source_id);
      console.log("Title:", obj.title);
      if (
        obj.source_id == "fox" ||
        obj.source_id == "nypost" ||
        obj.source_id == "washingtontimes" ||
        obj.source_id == "wsj" ||
        obj.source_id == "thejournal" ||
        obj.source_id == "dailymailuk" ||
        obj.source_id == "express"
      ) {
        rukRightOrganization.innerText = obj.source_id.toUpperCase();
        rukRightArticle.innerText = obj.title;
        rukRightArticle.href = obj.link;
        rukRightPicture.src = obj.image_url;
      }
    });
  }
  fetchRussiaUkraineRight();

  //this goes over all array results
  function fetchRussiaUkraineCenter() {
    console.log(RukData);
    RukData.results.forEach((obj, i) => {
      console.log("Source:", obj.source_id);
      console.log("Title:", obj.title);
      if (
        obj.source_id == "theconversation" ||
        obj.source_id == "forbes" ||
        obj.source_id == "cnbc"
      ) {
        rukCenterOrganization.innerText = obj.source_id.toUpperCase();
        rukCenterArticle.innerText = obj.title;
        rukCenterArticle.href = obj.link;
        rukCenterPicture.src = obj.image_url;
      }
    });
  }
  fetchRussiaUkraineCenter();
}

async function FetchBigTechNews() {
  const BigTechResponse = await fetch(
    //change api key to fit category
    `https://newsdata.io/api/1/news?apikey=pub_119111e2cfeb9f7cabec19ab21c7533e88904&q=musk%20AND%20twitter&language=en&country=us,gb`,
    { mode: "cors" }
  );
  const BigTechData = await BigTechResponse.json();

  //this goes over all array results
  function fetchBigTechLeft() {
    console.log(BigTechData);
    BigTechData.results.forEach((obj, i) => {
      console.log("Source:", obj.source_id);
      console.log("Title:", obj.title);
      if (
        obj.source_id == "techcrunch" ||
        obj.source_id == "businessinsider_us" ||
        obj.source_id == "cnn" ||
        obj.source_id == "washingtonpost" ||
        obj.source_id == "nbc" ||
        obj.source_id == "cbsnews" ||
        obj.source_id == "msnbc" ||
        obj.source_id == "npr" ||
        obj.source_id == "abcnews" ||
        obj.source_id == "insider" ||
        obj.source_id == "yahoo" ||
        obj.source_id == "vox" ||
        obj.source_id == "thescottishsun" ||
        obj.source_id == "theguardian"
      ) {
        BigTechLeftOrganizaton.innerText = obj.source_id.toUpperCase();
        BigTechLeftArticle.innerText = obj.title;
        BigTechLeftArticle.href = obj.link;
        BigTechLeftPicture.src = obj.image_url;
      }
    });
  }
  fetchBigTechLeft();

  //this goes over all array results
  function fetchBigTechRight() {
    console.log(BigTechData);
    BigTechData.results.forEach((obj, i) => {
      console.log("Source:", obj.source_id);
      console.log("Title:", obj.title);
      if (
        obj.source_id == "oilprice" ||
        obj.source_id == "nypost" ||
        obj.source_id == "washingtontimes" ||
        obj.source_id == "wsj" ||
        obj.source_id == "thejournal" ||
        obj.source_id == "dailymailuk" ||
        obj.source_id == "express"
      ) {
        BigTechRightOrganization.innerText = obj.source_id.toUpperCase();
        BigTechRightArticle.innerText = obj.title;
        BigTechRightArticle.href = obj.link;
        BigTechRightPicture.src = obj.image_url;
      }
    });
  }
  fetchBigTechRight();

  //this goes over all array results
  function fetchBigTechCenter() {
    console.log(BigTechData);
    BigTechData.results.forEach((obj, i) => {
      console.log("Source:", obj.source_id);
      console.log("Title:", obj.title);
      if (
        obj.source_id == "financialtimes" ||
        obj.source_id == "forbes" ||
        obj.source_id == "cnbc" ||
        obj.source_id == "skynews" ||
        obj.source_id == "theconversation"
      ) {
        BigTechCenterOrganization.innerText = obj.source_id.toUpperCase();
        BigTechCenterArticle.innerText = obj.title;
        BigTechCenterArticle.href = obj.link;
        BigTechCenterPicture.src = obj.image_url;
      }
    });
  }
  fetchBigTechCenter();
}
