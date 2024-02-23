let cardWidth = 250;

let scrollPosition = 0;
let scrollStr;

const prevScroll = (event) => {
  scrollPosition += cardWidth;
  console.log(scrollPosition);
  document.querySelector(".carousel-inner").style.left = scrollPosition + "px";
};

const nextScroll = (event) => {
  scrollPosition -= cardWidth;
  console.log(scrollPosition);
  document.querySelector(".carousel-inner").style.left = scrollPosition + "px";
};

document.querySelector(".carousel-control-next").addEventListener("click", nextScroll);
document.querySelector(".carousel-control-prev").addEventListener("click", prevScroll);
