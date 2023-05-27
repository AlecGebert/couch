// Sidebar

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

Array.from(document.querySelectorAll(".menu")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.remove("change");
  };
});

// Siebar End
