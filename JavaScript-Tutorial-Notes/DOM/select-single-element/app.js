// Element ismi ile ulaşma
let elementName = document.getElementsByTagName("div");
console.log(elementName);

// Element id si ile ulaşma
let elementId = document.getElementById("divId");
console.log(elementId);

// Element class si ile ulaşma
let elementClass = document.getElementsByClassName("divClass");
console.log(elementClass);

// elemente attribute ile ulaşma
let attribute = document.querySelector("[data-get='dataSelector']");
console.log(attribute);

//? Yeni gelen seçici =  querySelector

// element ismi
let queryElementSelector = document.querySelector("div");
console.log(queryElementSelector);

// element id
let queryIdSelector = document.querySelector("#divId");
console.log(queryIdSelector);

// element classı
let queryClassSelector = document.querySelector(".divClass");
console.log(queryClassSelector);

// element özeliği
let queryAttributeSelector = document.querySelector(
  "[data-get='dataSelector']"
);
console.log(queryAttributeSelector);

//? veya css gibi seçebilirsiniz
let cssSelector = document.querySelector("div:nth-of-type(2)");
cssSelector = document.querySelector("div:first-child");
console.log(cssSelector);
