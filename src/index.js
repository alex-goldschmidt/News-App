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

const EconomyStories = document.querySelector(".EconomyStories");
const EconomyLeftOrganizaton = document.querySelector(
  `[data-id="EconomyLeftOrganization"]`
);
const EconomyLeftArticle = document.querySelector(
  `[data-id="EconomyLeftArticle"]`
);
const EconomyLeftPicture = document.querySelector(
  `[data-id="EconomyLeftPicture"]`
);
const EconomyCenterOrganization = document.querySelector(
  `[data-id="EconomyCenterOrganization"]`
);
const EconomyCenterArticle = document.querySelector(
  `[data-id="EconomyCenterArticle"]`
);
const EconomyCenterPicture = document.querySelector(
  `[data-id="EconomyCenterPicture"]`
);

const EconomyRightOrganization = document.querySelector(
  `[data-id="EconomyRightOrganization"]`
);
const EconomyRightArticle = document.querySelector(
  `[data-id="EconomyRightArticle"]`
);
const EconomyRightPicture = document.querySelector(
  `[data-id="EconomyRightPicture"]`
);

const CongressStories = document.querySelector(".CongressStories");
const CongressLeftOrganizaton = document.querySelector(
  `[data-id="CongressLeftOrganization"]`
);
const CongressLeftArticle = document.querySelector(
  `[data-id="CongressLeftArticle"]`
);
const CongressLeftPicture = document.querySelector(
  `[data-id="CongressLeftPicture"]`
);
const CongressCenterOrganization = document.querySelector(
  `[data-id="CongressCenterOrganization"]`
);
const CongressCenterArticle = document.querySelector(
  `[data-id="CongressCenterArticle"]`
);
const CongressCenterPicture = document.querySelector(
  `[data-id="CongressCenterPicture"]`
);

const CongressRightOrganization = document.querySelector(
  `[data-id="CongressRightOrganization"]`
);
const CongressRightArticle = document.querySelector(
  `[data-id="CongressRightArticle"]`
);
const CongressRightPicture = document.querySelector(
  `[data-id="CongressRightPicture"]`
);

const ChinaStories = document.querySelector(".ChinaStories");
const ChinaLeftOrganizaton = document.querySelector(
  `[data-id="ChinaLeftOrganization"]`
);
const ChinaLeftArticle = document.querySelector(`[data-id="ChinaLeftArticle"]`);
const ChinaLeftPicture = document.querySelector(`[data-id="ChinaLeftPicture"]`);
const ChinaCenterOrganization = document.querySelector(
  `[data-id="ChinaCenterOrganization"]`
);
const ChinaCenterArticle = document.querySelector(
  `[data-id="ChinaCenterArticle"]`
);
const ChinaCenterPicture = document.querySelector(
  `[data-id="ChinaCenterPicture"]`
);

const ChinaRightOrganization = document.querySelector(
  `[data-id="ChinaRightOrganization"]`
);
const ChinaRightArticle = document.querySelector(
  `[data-id="ChinaRightArticle"]`
);
const ChinaRightPicture = document.querySelector(
  `[data-id="CongressRightPicture"]`
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
  EconomyStories.style.display = "none";
  CongressStories.style.display = "none";
  ChinaStories.style.display = "none";
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
  EconomyStories.style.display = "none";
  CongressStories.style.display = "none";
  ChinaStories.style.display = "none";
});

EconomyBox.addEventListener("click", () => {
  EconomyHeader.style.display = "initial";
  EconomyStoriesBlock.style.display = "flex";
  EconomyStories.style.display = "block";
  BigTechHeader.style.display = "none";
  CongressHeader.style.display = "none";
  RussiaUkraineHeader.style.display = "none";
  ChinaHeader.style.display = "none";
  categories.style.display = "none";
  mainHeader.style.display = "none";
  RussiaUkraineStories.style.display = "none";
  BigTechStories.style.display = "none";
  CongressStories.style.display = "none";
  ChinaStories.style.display = "none";
});

CongressBox.addEventListener("click", () => {
  CongressHeader.style.display = "initial";
  CongressStoriesBlock.style.display = "flex";
  CongressStories.style.display = "block";
  BigTechHeader.style.display = "none";
  EconomyHeader.style.display = "none";
  RussiaUkraineHeader.style.display = "none";
  ChinaHeader.style.display = "none";
  categories.style.display = "none";
  mainHeader.style.display = "none";
  RussiaUkraineStories.style.display = "none";
  BigTechStories.style.display = "none";
  EconomyStories.style.display = "none";
  ChinaStories.style.display = "none";
});

ChinaBox.addEventListener("click", () => {
  ChinaHeader.style.display = "initial";
  ChinaStoriesBlock.style.display = "flex";
  ChinaStories.style.display = "block";
  BigTechHeader.style.display = "none";
  CongressHeader.style.display = "none";
  RussiaUkraineHeader.style.display = "none";
  EconomyHeader.style.display = "none";
  categories.style.display = "none";
  mainHeader.style.display = "none";
  RussiaUkraineStories.style.display = "none";
  BigTechStories.style.display = "none";
  EconomyStories.style.display = "none";
  CongressStories.style.display = "none";
});
//

//stories card for each category's page
const RukStoriesBlock = document.querySelector(`[data-id="RukStoriesBlock"]`);
const BigTechStoriesBlock = document.querySelector(
  `[data-id="BigTechStoriesBlock"]`
);
const EconomyStoriesBlock = document.querySelector(
  `[data-id="EconomyStoriesBlock"]`
);
const CongressStoriesBlock = document.querySelector(
  `[data-id="CongressStoriesBlock"]`
);
const ChinaStoriesBlock = document.querySelector(
  `[data-id="ChinaStoriesBlock"]`
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
      EconomyStories.style.display = "none";
      CongressStories.style.display = "none";
      ChinaStories.style.display = "none";
    });
  }
}
AllBackButtons();

window.addEventListener("load", () => {
  //FetchRussiaUkraineNews();
  //FetchBigTechNews();
  //FetchEconomyNews();
  //FetchCongressNews();
  //FetchChinaNews();
});

async function FetchRussiaUkraineNews() {
  const RukResponse = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_119111e2cfeb9f7cabec19ab21c7533e88904&q=ukraine&language=en&country=us,gb`,
    { mode: "cors" }
  );
  const RukData = await RukResponse.json();

  //this goes over all array results
  function fetchRussiaUkraineLeft() {
    RukData.results.forEach((obj, i) => {
      if (
        obj.source_id == "theguardian" ||
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
      if (obj.image_url == null) {
        rukLeftPicture.src = "../dist/images/Russia Ukraine.png";
      }
    });
  }
  fetchRussiaUkraineLeft();

  //this goes over all array results
  function fetchRussiaUkraineRight() {
    RukData.results.forEach((obj, i) => {
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
      if (obj.image_url == null) {
        rukRightPicture.src = "../dist/images/Russia Ukraine.png";
      }
    });
  }
  fetchRussiaUkraineRight();

  //this goes over all array results
  function fetchRussiaUkraineCenter() {
    RukData.results.forEach((obj, i) => {
      if (
        obj.source_id == "theconversation" ||
        obj.source_id == "forbes" ||
        obj.source_id == "cnbc" ||
        obj.source_id == "financialtimes" ||
        obj.source_id == "skynews" ||
        obj.source_id == "nbcnews" ||
        obj.source_id == "reuters"
      ) {
        rukCenterOrganization.innerText = obj.source_id.toUpperCase();
        rukCenterArticle.innerText = obj.title;
        rukCenterArticle.href = obj.link;
        rukCenterPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        rukCenterPicture.src = "../dist/images/Russia Ukraine.png";
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
    BigTechData.results.forEach((obj, i) => {
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
        obj.source_id == "theguardian" ||
        obj.source_id == "metro"
      ) {
        BigTechLeftOrganizaton.innerText = obj.source_id.toUpperCase();
        BigTechLeftArticle.innerText = obj.title;
        BigTechLeftArticle.href = obj.link;
        BigTechLeftPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        BigTechLeftPicture.src = "../dist/images/Big tech.png";
      }
    });
  }
  fetchBigTechLeft();

  //this goes over all array results
  function fetchBigTechRight() {
    BigTechData.results.forEach((obj, i) => {
      if (
        obj.source_id == "oilprice" ||
        obj.source_id == "nypost" ||
        obj.source_id == "washingtontimes" ||
        obj.source_id == "wsj" ||
        obj.source_id == "thejournal" ||
        obj.source_id == "dailymailuk" ||
        obj.source_id == "express" ||
        obj.source_id == "rt"
      ) {
        BigTechRightOrganization.innerText = obj.source_id.toUpperCase();
        BigTechRightArticle.innerText = obj.title;
        BigTechRightArticle.href = obj.link;
        BigTechRightPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        BigTechRightPicture.src = "../dist/images/Big tech.png";
      }
    });
  }
  fetchBigTechRight();

  //this goes over all array results
  function fetchBigTechCenter() {
    BigTechData.results.forEach((obj, i) => {
      if (
        obj.source_id == "financialtimes" ||
        obj.source_id == "forbes" ||
        obj.source_id == "cnbc" ||
        obj.source_id == "skynews" ||
        obj.source_id == "theconversation" ||
        obj.source_id == "nbcnews" ||
        obj.source_id == "reuters"
      ) {
        BigTechCenterOrganization.innerText = obj.source_id.toUpperCase();
        BigTechCenterArticle.innerText = obj.title;
        BigTechCenterArticle.href = obj.link;
        BigTechCenterPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        BigTechCenterPicture.src = "../dist/images/Big tech.png";
      }
    });
  }
  fetchBigTechCenter();
}

async function FetchEconomyNews() {
  const EconomyResponse = await fetch(
    //change api key to fit category
    `https://newsdata.io/api/1/news?apikey=pub_119111e2cfeb9f7cabec19ab21c7533e88904&category=business&q=economy%20OR%20jobs%20OR%20inflation%20OR%20stocks%20-rt&language=en&country=us,gb`,
    { mode: "cors" }
  );
  const EconomyData = await EconomyResponse.json();

  //this goes over all array results
  function fetchEconomyLeft() {
    EconomyData.results.forEach((obj, i) => {
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
        obj.source_id == "theguardian" ||
        obj.source_id == "metro"
      ) {
        EconomyLeftOrganizaton.innerText = obj.source_id.toUpperCase();
        EconomyLeftArticle.innerText = obj.title;
        EconomyLeftArticle.href = obj.link;
        EconomyLeftPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        EconomyLeftPicture.src = "../dist/images/Economy.png";
      }
    });
  }
  fetchEconomyLeft();

  //this goes over all array results
  function fetchEconomyRight() {
    EconomyData.results.forEach((obj, i) => {
      if (
        obj.source_id == "oilprice" ||
        obj.source_id == "nypost" ||
        obj.source_id == "washingtontimes" ||
        obj.source_id == "wsj" ||
        obj.source_id == "thejournal" ||
        obj.source_id == "dailymailuk" ||
        obj.source_id == "express"
      ) {
        EconomyRightOrganization.innerText = obj.source_id.toUpperCase();
        EconomyRightArticle.innerText = obj.title;
        EconomyRightArticle.href = obj.link;
        EconomyRightPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        EconomyRightPicture.src = "../dist/images/Economy.png";
      }
    });
  }
  fetchEconomyRight();

  //this goes over all array results
  function fetchEconomyCenter() {
    EconomyData.results.forEach((obj, i) => {
      if (
        obj.source_id == "financialtimes" ||
        obj.source_id == "forbes" ||
        obj.source_id == "cnbc" ||
        obj.source_id == "skynews" ||
        obj.source_id == "theconversation" ||
        obj.source_id == "nbcnews"
      ) {
        EconomyCenterOrganization.innerText = obj.source_id.toUpperCase();
        EconomyCenterArticle.innerText = obj.title;
        EconomyCenterArticle.href = obj.link;
        EconomyCenterPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        EconomyCenterPicture.src = "../dist/images/Economy.png";
      }
    });
  }
  fetchEconomyCenter();
}

async function FetchCongressNews() {
  const CongressResponse = await fetch(
    //change api key to fit category
    `https://newsdata.io/api/1/news?apikey=pub_119111e2cfeb9f7cabec19ab21c7533e88904&category=politics&language=en&country=us`,
    { mode: "cors" }
    //&category=politics
    //&q=congress%20OR%20pelosi%20OR%20democrats%20OR%20republicans
  );
  const CongressData = await CongressResponse.json();

  //this goes over all array results
  function fetchCongressLeft() {
    CongressData.results.forEach((obj, i) => {
      if (
        obj.source_id == "techcrunch" ||
        obj.source_id == "businessinsider_us" ||
        obj.source_id == "huffpost " ||
        obj.source_id == "cnn" ||
        obj.source_id == "washingtonpost" ||
        obj.source_id == "nbc" ||
        obj.source_id == "cbsnews" ||
        obj.source_id == "msnbc" ||
        obj.source_ud == "huffpost" ||
        obj.source_id == "npr" ||
        obj.source_id == "abcnews" ||
        obj.source_id == "insider" ||
        obj.source_id == "yahoo" ||
        obj.source_id == "thescottishsun" ||
        obj.source_id == "theguardian" ||
        obj.source_id == "salon" ||
        obj.source_id == "metro"
      ) {
        CongressLeftOrganizaton.innerText = obj.source_id.toUpperCase();
        CongressLeftArticle.innerText = obj.title;
        CongressLeftArticle.href = obj.link;
        CongressLeftPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        CongressLeftPicture.src = "../dist/images/Congress.png";
      }
    });
  }
  fetchCongressLeft();

  //this goes over all array results
  function fetchCongressRight() {
    CongressData.results.forEach((obj, i) => {
      if (
        obj.source_id == "oilprice" ||
        obj.source_id == "thesun" ||
        obj.source_id == "nypost" ||
        obj.source_id == "washingtontimes" ||
        obj.source_id == "wsj" ||
        obj.source_id == "thejournal" ||
        obj.source_id == "dailymailuk" ||
        obj.source_id == "expresscouk" ||
        obj.source_id == "thewest" ||
        obj.source_id == "rightwirereport"
      ) {
        CongressRightOrganization.innerText = obj.source_id.toUpperCase();
        CongressRightArticle.innerText = obj.title;
        CongressRightArticle.href = obj.link;
        CongressRightPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        CongressRightPicture.src = "../dist/images/Congress.png";
      }
    });
  }
  fetchCongressRight();

  //this goes over all array results
  function fetchCongressCenter() {
    CongressData.results.forEach((obj, i) => {
      if (
        obj.source_id == "financialtimes" ||
        obj.source_id == "forbes" ||
        obj.source_id == "cnbc" ||
        obj.source_id == "skynews" ||
        obj.source_id == "theconversation" ||
        obj.source_id == "nbcnews" ||
        obj.source_id == "reuters"
      ) {
        CongressCenterOrganization.innerText = obj.source_id.toUpperCase();
        CongressCenterArticle.innerText = obj.title;
        CongressCenterArticle.href = obj.link;
        CongressCenterPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        CongressCenterPicture.src = "../dist/images/Congress.png";
      }
    });
  }
  fetchCongressCenter();
}

async function FetchChinaNews() {
  const ChinaResponse = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_119111e2cfeb9f7cabec19ab21c7533e88904&category=business,technology,politics&q=china&language=en&country=us,gb,au`,
    { mode: "cors" }
  );
  const ChinaData = await ChinaResponse.json();

  //this goes over all array results
  function fetchChinaLeft() {
    ChinaData.results.forEach((obj, i) => {
      if (
        obj.source_id == "techcrunch" ||
        obj.source_id == "businessinsider_us" ||
        obj.source_id == "huffpost " ||
        obj.source_id == "cnn" ||
        obj.source_id == "washingtonpost" ||
        obj.source_id == "nbc" ||
        obj.source_id == "cbsnews" ||
        obj.source_id == "msnbc" ||
        obj.source_ud == "huffpost" ||
        obj.source_id == "npr" ||
        obj.source_id == "abcnews" ||
        obj.source_id == "insider" ||
        obj.source_id == "yahoo" ||
        obj.source_id == "thescottishsun" ||
        obj.source_id == "theguardian" ||
        obj.source_id == "salon" ||
        obj.source_id == "metro"
      ) {
        ChinaLeftOrganizaton.innerText = obj.source_id.toUpperCase();
        ChinaLeftArticle.innerText = obj.title;
        ChinaLeftArticle.href = obj.link;
        ChinaLeftPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        ChinaLeftPicture.src = "../dist/images/China.png";
      }
    });
  }
  fetchChinaLeft();

  //this goes over all array results
  function fetchChinaRight() {
    ChinaData.results.forEach((obj, i) => {
      if (
        obj.source_id == "oilprice" ||
        obj.source_id == "thesun" ||
        obj.source_id == "nypost" ||
        obj.source_id == "washingtontimes" ||
        obj.source_id == "wsj" ||
        obj.source_id == "thejournal" ||
        obj.source_id == "dailymailuk" ||
        obj.source_id == "expresscouk" ||
        obj.source_id == "thewest" ||
        obj.source_id == "rightwirereport" ||
        obj.source_id == "rt"
      ) {
        ChinaRightOrganization.innerText = obj.source_id.toUpperCase();
        ChinaRightArticle.innerText = obj.title;
        ChinaRightArticle.href = obj.link;
        ChinaRightPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        ChinaRightPicture.src = "../dist/images/China.png";
      }
    });
  }
  fetchChinaRight();

  //this goes over all array results
  function fetchChinaCenter() {
    ChinaData.results.forEach((obj, i) => {
      if (
        obj.source_id == "financialtimes" ||
        obj.source_id == "forbes" ||
        obj.source_id == "cnbc" ||
        obj.source_id == "skynews" ||
        obj.source_id == "theconversation" ||
        obj.source_id == "nbcnews" ||
        obj.source_id == "reuters"
      ) {
        ChinaCenterOrganization.innerText = obj.source_id.toUpperCase();
        ChinaCenterArticle.innerText = obj.title;
        ChinaCenterArticle.href = obj.link;
        ChinaCenterPicture.src = obj.image_url;
      }
      if (obj.image_url == null) {
        ChinaCenterPicture.src = "../dist/images/China.png";
      }
    });
  }
  fetchChinaCenter();
}
