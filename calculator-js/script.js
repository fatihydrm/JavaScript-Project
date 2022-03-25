let num = document.querySelectorAll(".num");
let display = document.querySelector("#display");
let clear = document.querySelector(".clear");

num.forEach((num) => {
  num.onclick = () => {
    display.value += Number(num.textContent);
  };
});

clear.onclick = () => {
  display.value = "";
};
