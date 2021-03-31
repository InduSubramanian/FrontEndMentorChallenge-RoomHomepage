hamburger = document.querySelector(".hamburger");
normal = document.querySelector(".normal");
links = document.querySelector(".links");
navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
  links.classList.add("show");
  normal.classList.add("hide");
  navbar.classList.add("dim");
  navbar.style.backgroundColor = "white";
});

close = document.querySelector(".close");
close.addEventListener("click", function () {
  links.classList.remove("show");
  normal.classList.remove("hide");
  navbar.classList.remove("dim");
  navbar.style.backgroundColor = "transparent";
});

btns = document.querySelectorAll(".btn");

let i = 0;
let titles = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

let contents = [
  " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

let bgs = [
  `url("./images/desktop-image-hero-1.jpg")`,
  `url("./images/desktop-image-hero-2.jpg")`,
  `url("./images/desktop-image-hero-3.jpg")`,
];

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("btn-right")) {
      i++;
      if (i > 2) {
        i = 0;
      }
    }
    if (e.currentTarget.classList.contains("btn-left")) {
      i--;
      if (i < 0) {
        i = 2;
      }
    }
    e.currentTarget.parentElement.parentElement.style.backgroundImage = bgs[i];
    main_content =
      e.currentTarget.parentElement.parentElement.nextElementSibling;

    title = main_content.querySelector("h1");
    content = main_content.querySelector("p");

    title.innerHTML = titles[i];
    content.innerHTML = contents[i];
  });
});
