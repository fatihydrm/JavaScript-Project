let scrollElements = document.querySelectorAll(".inner");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const test1 = (window.scrollY / 3).toFixed();
  console.count(window.scrollTo , window.scrollTo);
}

scrollElements.forEach((inner) => {});
