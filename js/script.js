let cardWidth = 250;

let scrollPosition = 0;
let scrollStr;

const prevScroll = (event) => {
  if (scrollPosition == 0) {
    scrollPosition += 0;
  } else {
    scrollPosition += cardWidth;
  }
  console.log(scrollPosition);
  document.querySelector(".carousel-inner").style.left = scrollPosition + "px";
};

const nextScroll = (event) => {
  if (scrollPosition == -1500) {
    scrollPosition += 0;
  } else {
    scrollPosition -= cardWidth;
  }
  console.log(scrollPosition);
  document.querySelector(".carousel-inner").style.left = scrollPosition + "px";
};

document.querySelector(".carousel-control-next").addEventListener("click", nextScroll);
document.querySelector(".carousel-control-prev").addEventListener("click", prevScroll);
