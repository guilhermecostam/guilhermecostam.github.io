/* Scroll reveal */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "5px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `.s-hero .title-box, 
  .cards,
  .card,
  .s-about,
  .about-me .my-picture,
  .s-cases,
  .title-cases,
  .cases`,
  { interval: 50 }
);

const nav = document.querySelector("header .container nav");

const toggle = document.querySelectorAll(".toggle");

for (element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll(
  "nav .menu li .menu-item, nav .btn-primary, nav .menu-social li a"
);

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/* Scroll to Top */
const scrollBtn = document.querySelector(".btn");

const btnVisibility = () => {
  if (window.scrollY > 400) {
      scrollBtn.style.visibility = "visible";
  } else {
      scrollBtn.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});