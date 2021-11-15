const icon = document.querySelector("#show_icon");
const plus = document.querySelectorAll(".main_top");
const more = document.querySelector(".more");
icon.addEventListener("click", (eo) => {
  grandFather.classList.toggle("show");
});

// for mobile
plus.forEach((dropdown) => {
  dropdown.addEventListener("click", (eo) => {
    const item = dropdown.parentElement.querySelector(".sub_parent");
    const icon = dropdown.parentElement.querySelector(".icon");
    icon.classList.toggle("icon-minus");
    item.classList.toggle("show");
  });
});

more.addEventListener("click", (eo) => {
  const item = more.parentElement.querySelector(".sub_sub_parent");
  const icon = more.parentElement.querySelector(".icon");
  icon.classList.toggle("icon-minus");
  item.classList.toggle("show");
});
