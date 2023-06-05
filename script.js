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

// Slider
let sliderTwo = tns({
  container: ".my-slider-2",
  slideBy: 1,
  speed: 400,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  controlsContainer: "#controls-2",
  prevButton: ".previous-2",
  nextButton: ".next-2",
  responsive: {
    1440: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});

// Scroll btn

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
