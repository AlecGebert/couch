// Sidebar

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// Array.from(document.querySelectorAll(".menu")).forEach((item) => {
//   item.onclick = () => {
//     item.parentElement.parentElement.classList.remove("change");
//   };
// });

Array.from(document.querySelectorAll(".menu-link")).forEach((item) => {
  item.onclick = () => {
    document.querySelector(".container").classList.remove("change");
  };
});
// Siebar End

// Accordion
let acc = document.querySelectorAll(".accordion"),
  i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let desc = this.nextElementSibling;
    this.classList.toggle("active");
    desc.style.maxHeight
      ? (desc.style.maxHeight = null)
      : (desc.style.maxHeight = desc.scrollHeight + "px");
  });
}
// Accordion End
