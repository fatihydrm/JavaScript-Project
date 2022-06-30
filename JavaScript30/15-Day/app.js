let form = document.querySelector("#form");
let label = document.querySelectorAll(".label");
let list = document.querySelector(".list");
form.children[0].focus();
let items = [
  {
    name: "Döner",
    checked: false,
  },
  {
    name: "Kumru",
    checked: true,
  },
  {
    name: "Sosisli",
    checked: false,
  },
  {
    name: "Hamburger",
    checked: false,
  },
];
if (localStorage.getItem("data") !== null) {
  console.log(localStorage.getItem("data"));
} else {
  localStorage.setItem("data", JSON.stringify(items));
  console.log(JSON.parse(localStorage.getItem("data")));
}
function addItem() {
  form.children[0].value = "";
  form.children[0].focus();
}
function listening() {
  items.forEach((items, i) => {
    let item = document.createElement("li");
    let html = `
    <input type="checkbox" id="item${i}" />
    <label class="label" for="item${i}">${items.name}</label>
    <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
              />
            </svg>
     </div>
    `;
    item.innerHTML = html;
    list.appendChild(item);
  });
}
listening();
list.addEventListener("click", (e) => {
  if (e.target.tagName == "svg") {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.tagName == "path") {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  console.log(e.target);
});

form.children[1].addEventListener("click", (e) => {
  if (form.children[0].value != "") {
    items.push({ name: form.children[0].value });
    list.innerHTML = "";
    addItem();
    localStorage.setItem("data", JSON.stringify(items));
    listening();
  } else {
    form.children[0].style.border = "1px solid red";

    setTimeout(() => {
      form.children[0].style.border = "";
    }, 500);
  }
});
form.addEventListener("click", (e) => {
  e.preventDefault();
});
